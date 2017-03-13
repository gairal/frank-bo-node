import http from 'http'
import config from '../config'
import r from 'rethinkdb'

var Db = class {
  constructor (rdbConn) {
    this._rdbConn = rdbConn
  }

  async getAll (table, withImage = false) {
    let result
    try {
      let cursor
      if (!withImage) {
        cursor = await r.table(table).run(this._rdbConn)
      } else {
        cursor = await r.table(table).eqJoin('image_id', r.table('image'))
        .map((doc) => {
          return doc.merge(() => {
            return {
              'right': {
                'image': doc('right')('name')
              }
            }
          })
        })
        .without({
          'left': {
            'image_id': true
          },
          'right': {
            'id': true,
            'name': true
          }
        })
        .zip()
        .run(this._rdbConn)
      }
      result = await cursor.toArray()

      return result
    } catch (err) {
      if (err) throw err
    }

    return result
  }

  async getByCategory (table, category) {
    let result
    try {
      let cursor = await r.table(table).filter({'category_id': category}).run(this._rdbConn)
      result = await cursor.toArray()

      return result
    } catch (err) {
      if (err) throw err
    }

    return result
  }

  async getAllByCategory (table) {
    let result
    try {
      let cursor = await r.table('category').merge(obj => {
        let ret = {}
        ret[table + 's'] = r.table(table).getAll(obj('id'),
        {index: 'category_id'}).coerceTo('array')
        return ret
      }).run(this._rdbConn)
      result = await cursor.toArray()

      return result
    } catch (err) {
      if (err) throw err
    }

    return result
  }

  async getById (table, id, withImage = false) {
    try {
      let result
      if (!withImage) {
        result = await r.table(table).get(id).run(this._rdbConn)
      } else {
        let cursor = await r.table(table).filter({id: id}).eqJoin('image_id', r.table('image'))
        .map((doc) => {
          return doc.merge(() => {
            return {
              'right': {
                'image': doc('right')('name')
              }
            }
          })
        })
        .without({
          'left': {
            'image_id': true
          },
          'right': {
            'id': true,
            'name': true
          }
        })
        .zip()
        .run(this._rdbConn)
        result = await cursor.next()
      }

      return result
    } catch (err) {
      if (err) throw err
    }
  }

  async close () {
    try {
      await this._rdbConn.close()
    } catch (err) {
      if (err) throw err
    }
  }

  /*
  * Create a RethinkDB connection, and save it in ctx._rdbConn
  */
  static async init (ctx, next) {
    try {
      var conn = await r.connect(config.rethinkdb)
      ctx.db = new Db(conn)
      await next()
    } catch (err) {
      console.log(err.message)
      ctx.status = 500
      ctx.body = err.message || http.STATUS_CODES[ctx.status]
    }
  }
}

export default Db
