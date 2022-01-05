import http from "http";
import Datastore from "@google-cloud/datastore";

class Db {
  constructor(ds) {
    this.ds = ds;
  }

  /**
   *
   *
   * @param {any} kind
   * @param {boolean} [withImage=false]
   * @param {any} [descending=null]
   * @param {any} orderCol
   * @returns
   * @memberof Db
   */
  async getAll(kind, descending = null, orderCol) {
    let result = [];
    try {
      const q = this.ds.createQuery(kind);
      if (descending !== null) {
        const order = orderCol || "order";
        q.order(order, {
          descending,
        });
      }

      result = await q.run();

      if (typeof result[0][0].image !== "undefined") {
        const qImgs = this.ds.createQuery("image");
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
      const q = this.ds
        .createQuery(kind)
        .filter("category", "=", this.ds.key(["category", +category]));
      result = await q.run();
    } catch (err) {
      if (err) throw err;
    }

    return result;
  }

  async getAllByCategory(kind, descending = null, orderCol) {
    let result = [];
    try {
      const qKind = this.ds.createQuery(kind);
      if (descending !== null) {
        const order = orderCol || "order";
        qKind.order(order, {
          descending,
        });
      }

      const qCats = this.ds.createQuery("category").order("order");
      const tableRes = await qKind.run();
      const catRes = await qCats.run();

      const kinds = tableRes[0];
      result = catRes[0];

      // Order categories in Object for fast access
      const catsObj = {};
      for (let i = 0, l = result.length; i < l; i += 1) {
        const currCatId = result[i][Datastore.KEY].id;
        catsObj[currCatId] = result[i];
        catsObj[currCatId].index = i;
      }

      const key = `${kind}s`;
      for (let i = 0, l = kinds.length; i < l; i += 1) {
        const currCat = catsObj[kinds[i].category.id];
        if (typeof result[currCat.index][key] === "undefined") {
          result[currCat.index][key] = [];
        }

        delete kinds[i].category;
        result[currCat.index][key].push(kinds[i]);
      }

      for (let i = result.length - 1; i >= 0; i -= 1) {
        if (typeof result[i][key] === "undefined") {
          result.splice(i, 1);
        }
      }
    } catch (err) {
      if (err) throw err;
    }

    return result;
  }

  async getById(kind, id) {
    let result = [];

    try {
      const key = this.ds.key([kind, +id]);
      result = await this.ds.get(key);

      if (typeof result[0].image !== "undefined") {
        const imgKey = this.ds.key(["image", +result[0].image.id]);
        const img = await this.ds.get(imgKey);
        result[0].image = img[0];
      }
    } catch (err) {
      if (err) throw err;
    }

    return result[0];
  }

  async getSkillsFromId(kind, id) {
    let result = [];

    try {
      const kinds = `${kind}s`;
      const key = this.ds.key([kind, +id]);
      const q = this.ds
        .createQuery("skill")
        // .filter('level', 80);
        .filter(kinds, key);

      result = await q.run();
      // TODO
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
      logger.error(err.message);
      ctx.status = 500;
      ctx.body = err.message || http.STATUS_CODES[ctx.status];
    }
  }
}

export default Db;
