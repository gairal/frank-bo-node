import Koa from 'koa';
import swagger from 'swagger-injector';
import views from 'koa-views';
import serve from 'koa-static';
import config from './config';
import rootRoutes from './routes/index';
import swaggerRoutes from './routes/swagger';
import skillRoutes from './routes/skills';
import travelRoutes from './routes/travels';
import experienceRoutes from './routes/experiences';
import educationRoutes from './routes/educations';
import interestRoutes from './routes/interests';
import db from './services/database';
import utils from './services/utils';

const app = new Koa();

// request time
app.use(utils.requestTime);
// Create a RethinkDB connection
app.use(db.init);

app.use(views(`${__dirname}/views`, { extension: 'pug' }));
app.use(serve(`${__dirname}/public`));
app.use(rootRoutes.routes());
app.use(swaggerRoutes.routes());
app.use(skillRoutes.routes());
app.use(rootRoutes.routes());
app.use(travelRoutes.routes());
app.use(experienceRoutes.routes());
app.use(educationRoutes.routes());
app.use(interestRoutes.routes());

app.use(swagger.koa({
  path: `${__dirname}/swagger.json`,
  swagger: true,
  css: '.info_title {font-size: 50px !important; }',
}));

app.listen(config.koa.port, () => {
  console.log('Server running at http://localhost:3000'); // eslint-disable-line no-console
});

export default app;
