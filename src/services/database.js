import http from 'http';
import r from 'rethinkdb';
import config from 'config';
import { logger } from '../globals';

class Db {
  constructor(rdbConn) {
    this.rdbConn = rdbConn;
  }

  async getAll(table, withImage = false) {
    let result;
    try {
      let cursor;
      if (!withImage) {
        cursor = await r.table(table).run(this.rdbConn);
      } else {
        cursor = await r.table(table).eqJoin('image_id', r.table('image'))
          .map(doc => doc.merge(() => ({ right: { image: doc('right')('name') } })))
          .without({
            left: {
              image_id: true,
            },
            right: {
              id: true,
              name: true,
            },
          })
          .zip()
          .run(this.rdbConn);
      }
      result = await cursor.toArray();

      return result;
    } catch (err) {
      if (err) throw err;
    }

    return result;
  }

  async getByCategory(table, category) {
    let result;
    try {
      const cursor = await r.table(table).filter({ category_id: category }).run(this.rdbConn);
      result = await cursor.toArray();

      return result;
    } catch (err) {
      if (err) throw err;
    }

    return result;
  }

  async getAllByCategory(table) {
    let result;
    try {
      const cursor = await r.table('category').merge((obj) => {
        const ret = {};
        ret[`${table}s`] = r.table(table).getAll(obj('id'),
          { index: 'category_id' }).coerceTo('array');
        return ret;
      }).run(this.rdbConn);
      result = await cursor.toArray();

      return result;
    } catch (err) {
      if (err) throw err;
    }

    return result;
  }

  async getById(table, id, withImage = false) {
    let result;

    try {
      if (!withImage) {
        result = await r.table(table).get(id).run(this.rdbConn);
      } else {
        const cursor = await r.table(table).filter({ id }).eqJoin('image_id', r.table('image'))
          .map(doc => doc.merge(() => ({ right: { image: doc('right')('name') } })))
          .without({
            left: {
              image_id: true,
            },
            right: {
              id: true,
              name: true,
            },
          })
          .zip()
          .run(this.rdbConn);
        result = await cursor.next();
      }
    } catch (err) {
      if (err) throw err;
    }

    return result;
  }

  async close() {
    try {
      await this.rdbConn.close();
    } catch (err) {
      if (err) throw err;
    }
  }

  /*
  * Create a RethinkDB connection, and save it in ctx.rdbConn
  */
  static async init(ctx, next) {
    try {
      const conn = await r.connect(config.RETHINKDB);
      ctx.db = new Db(conn);
      await next();
    } catch (err) {
      logger().error(err.message);
      ctx.status = 500;
      ctx.body = err.message || http.STATUS_CODES[ctx.status];
    }
  }
}

export default Db;
