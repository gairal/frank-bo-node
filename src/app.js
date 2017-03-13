import config from './config'
import Koa from 'koa'
import views from 'koa-views'
import serve from 'koa-static'
import rootRoutes from './routes/index'
import skillRoutes from './routes/skills'
import travelRoutes from './routes/travels'
import experienceRoutes from './routes/experiences'
import educationRoutes from './routes/educations'
import interestRoutes from './routes/interests'
import db from './services/database'
import utils from './services/utils'
import swagger from 'swagger-koa'

const app = new Koa()

// request time
app.use(utils.requestTime)
// Create a RethinkDB connection
app.use(db.init)

app.use(views(`${__dirname}/views`, { extension: 'jade' }))
app.use(serve(`${__dirname}/public`))
app.use(rootRoutes.routes())
app.use(skillRoutes.routes())
app.use(rootRoutes.routes())
app.use(travelRoutes.routes())
app.use(experienceRoutes.routes())
app.use(educationRoutes.routes())
app.use(interestRoutes.routes())

// Swagger doc
app.use(swagger.init({
  apiVersion: '1.0',
  swaggerVersion: '1.1',
  swaggerURL: '/docs',
  swaggerJSON: '/api-docs.json',
  swaggerUI: './src/public/swagger',
  basePath: 'http://localhost:3000',
  info: {
    title: 'gairal.frank rest api',
    description: 'gairal.frank rest api'
  },
  apis: [
    './src/routes/educations.js',
    './src/routes/experiences.js'
  ]
}))

app.listen(config.koa.port, () => {
  console.log('Server running at http://localhost:3000')
})

export default app
