import Koa from 'koa';
import swagger from 'swagger-injector';
import views from 'koa-views';
import serve from 'koa-static';
import config from 'config';
import morgan from 'koa-morgan';
import { create, logger } from './globals';

import rootRoutes from './routes/index';
import swaggerRoutes from './routes/swagger';
import skillRoutes from './routes/skills';
import travelRoutes from './routes/travels';
import experienceRoutes from './routes/experiences';
import educationRoutes from './routes/educations';
import interestRoutes from './routes/interests';
import db from './services/database';
import utils from './services/utils';

// Create global objects
create();

const app = new Koa();

if (config.LOG_LEVEL === 'debug') {
  app.use(morgan('dev'));
}

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

const PORT = process.env.PORT || config.KOA.port;
app.listen(PORT, () => {
  logger().info(`Server running at http://localhost:${PORT}`);
});

export default app;
