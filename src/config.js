import dbConfig from '../database.json'

export default {
  rethinkdb: {
    host: dbConfig.host,
    port: dbConfig.port,
    authKey: dbConfig.authKey,
    db: dbConfig.db
  },
  koa: {
    port: 3000
  }
}
