import http from 'http';
import Datastore from '@google-cloud/datastore';
import { logger } from '../globals';

class Db {
  constructor(dConn) {
    this.dConn = dConn;
  }

  async getAll(table, withImage = false) {
    let result = [];
    try {
      let q;
      if (!withImage) {
        q = this.dConn.createQuery([table]);
      } else {
        // cursor = await r.table(table).eqJoin('image_id', r.table('image'))
        //   .map(doc => doc.merge(() => ({ right: { image: doc('right')('name') } })))
        //   .without({
        //     left: {
        //       image_id: true,
        //     },
        //     right: {
        //       id: true,
        //       name: true,
        //     },
        //   })
        //   .zip()
        //   .run(this.rdbConn);
        q = this.dConn.createQuery([table]);
      }

      result = await this.dConn.runQuery(q);
    } catch (err) {
      if (err) throw err;
    }

    return result[0];
  }

  // async getByCategory(table, category) {
  //   let result;
  //   try {
  //     const cursor = await r.table(table).filter({ category_id: category }).run(this.rdbConn);
  //     result = await cursor.toArray();

  //     return result;
  //   } catch (err) {
  //     if (err) throw err;
  //   }

  //   return result;
  // }

  async getAllByCategory(table) {
    let result = [];
    try {
      // const cursor = await r.table('category').merge((obj) => {
      //   const ret = {};
      //   ret[`${table}s`] = r.table(table).getAll(obj('id'),
      //     { index: 'category_id' }).coerceTo('array');
      //   return ret;
      // }).run(this.rdbConn);
      // result = await cursor.toArray();

      const q = this.dConn.createQuery(table);
      result = await this.dConn.runQuery(q);
    } catch (err) {
      if (err) throw err;
    }

    console.log(result[0][0][Datastore.KEY].id);

    return result[0];
  }

  async getById(table, id, withImage = false) {
    let result = [];

    try {
      if (!withImage) {
        const key = this.dConn.key([table, +id]);
        result = await this.dConn.get(key);
      } else {
        // const cursor = await r.table(table).filter({ id }).eqJoin('image_id', r.table('image'))
        //   .map(doc => doc.merge(() => ({ right: { image: doc('right')('name') } })))
        //   .without({
        //     left: {
        //       image_id: true,
        //     },
        //     right: {
        //       id: true,
        //       name: true,
        //     },
        //   })
        //   .zip()
        //   .run(this.rdbConn);
        // result = await cursor.next();
        const key = this.dConn.key([table, +id]);
        result = await this.dConn.get(key);
      }
    } catch (err) {
      if (err) throw err;
    }

    return result[0];
  }

  /*
  * Create a dataStore connection, and save it in ctx.rdbConn
  */
  static async init(ctx, next) {
    try {
      const conn = await Datastore();
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
