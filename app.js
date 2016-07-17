import config from './config'
import Koa from 'koa'
import views from 'koa-views'
import serve from 'koa-static'
import rootRoutes from './routes/index'
import skillRoutes from './routes/skills'
import db from './services/database'
import utils from './services/utils'

const app = new Koa()

//request time
app.use(utils.requestTime)
// Create a RethinkDB connection
app.use(db.init);

app.use(views(`${__dirname}/views`, { extension: 'jade' }))
app.use(serve(`${__dirname}/public`))
app.use(rootRoutes.routes())
app.use(skillRoutes.routes())

app.listen(config.koa.port, () => {
    console.log('Server running at http://localhost:3000')
})

export default app
