import config from '../config'
import r from 'rethinkdb'

var Db = class {
    constructor(rdbConn) {
        this._rdbConn = rdbConn;
    }

    async getAll(table) {
        try {
            let cursor = await r.table(table).run(this._rdbConn);
            let result = await cursor.toArray();

            return result;
        } catch(err) {
            if (err) throw err;
        }

        return result;
    }

    async getByCategory(table, category) {
        try {
            let cursor = await r.table(table).filter({'category_id': category}).run(this._rdbConn);
            let result = await cursor.toArray();

            return result;
        } catch(err) {
            if (err) throw err;
        }

        return result;
    }

    async getById(table, id) {
        try {
            let result = await r.table(table).get(id).run(this._rdbConn);

            return result;
        } catch(err) {
            if (err) throw err;
        }
    }

    async close() {
        try {
            await this._rdbConn.close();
            
        } catch(err) {
            if (err) throw err;
        }
    }

    /*
     * Create a RethinkDB connection, and save it in ctx._rdbConn
     */
    static async init(ctx, next) {
        try{
            var conn = await r.connect(config.rethinkdb);
            console.log(`Successufull DB Connection: ${conn.db}`);
            //ctx._rdbConn = conn;
            ctx.db = new Db(conn);
            await next()
        } catch(err) {
            console.log(err.message);
            ctx.status = 500;
            ctx.body = err.message || http.STATUS_CODES[ctx.status];
        }
    }
};

export default Db