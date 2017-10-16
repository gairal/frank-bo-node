import http from 'http';
import Datastore from '@google-cloud/datastore';
import { logger } from '../globals';

class Db {
  constructor(dConn) {
    this.dConn = dConn;
  }

  async getAll(kind, withImage = false) {
    let result = [];
    try {
      if (!withImage) {
        const q = this.dConn.createQuery(kind);
        result = await q.run();
      } else {
        const qKind = this.dConn.createQuery(kind);
        const qImgs = this.dConn.createQuery('image');
        result = await qKind.run();
        const imgRes = await qImgs.run();

        const imgs = imgRes[0];
        const kinds = result[0];

        // Order images in Object for fast access
        const imgsObj = {};
        let currImgId;
        for (let i = 0, l = imgs.length; i < l; i += 1) {
          currImgId = imgs[i][Datastore.KEY].id;
          imgsObj[currImgId] = imgs[i];
        }

        for (let i = 0, l = kinds.length; i < l; i += 1) {
          kinds[i].image = imgsObj[kinds[i].image.id];
        }
      }
    } catch (err) {
      if (err) throw err;
    }

    return result[0];
  }

  async getByCategory(kind, category) {
    let result;
    try {
      const q = this.dConn.createQuery(kind)
        .filter('category', '=', this.dConn.key(['category', +category]));
      result = await q.run();
    } catch (err) {
      if (err) throw err;
    }

    return result;
  }

  async getAllByCategory(kind) {
    const result = [];
    try {
      const qKind = this.dConn.createQuery(kind);
      const qCats = this.dConn.createQuery('category');
      const tableRes = await qKind.run();
      const catRes = await qCats.run();

      const kinds = tableRes[0];
      const cats = catRes[0];

      // Order categories in Object for fast access
      const catsObj = {};
      let currCatId;
      for (let i = 0, l = cats.length; i < l; i += 1) {
        currCatId = cats[i][Datastore.KEY].id;
        catsObj[currCatId] = cats[i];
      }

      let kindCatId;
      let currCat;
      for (let i = 0, l = kinds.length; i < l; i += 1) {
        kindCatId = kinds[i].category.id;
        currCat = catsObj[kindCatId];
        if (typeof catsObj[kindCatId].index === 'undefined') {
          const newLength = result.push(Object.assign({ skills: [] }, currCat));
          currCat.index = newLength - 1;
        }

        delete kinds[i].category;
        result[currCat.index].skills.push(kinds[i]);
      }
    } catch (err) {
      if (err) throw err;
    }

    return result;
  }

  async getById(kind, id, withImage = false) {
    let result = [];

    try {
      const key = this.dConn.key([kind, +id]);
      result = await this.dConn.get(key);

      if (withImage) {
        const imgKey = this.dConn.key(['image', +result[0].image.id]);
        const img = await this.dConn.get(imgKey);
        result[0].image = img[0];
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
