import * as Koa from "koa";
import * as logger from "koa-logger";
import * as cors from "@koa/cors";

import rootRoutes from "./routes/index";
import swaggerRoutes from "./routes/swagger";
import skillRoutes from "./routes/skills";
import travelRoutes from "./routes/travels";
import worksRoutes from "./routes/works";
import educationRoutes from "./routes/educations";
import interestRoutes from "./routes/interests";
import db from "./services/database";
import { LOG_LEVEL } from "./env";

export const app = new Koa();

if (LOG_LEVEL === "debug") {
  app.use(logger());
}

app.use(db.init);
app.use(cors());

app.use(rootRoutes.routes());
app.use(swaggerRoutes.routes());
app.use(skillRoutes.routes());
app.use(rootRoutes.routes());
app.use(travelRoutes.routes());
app.use(worksRoutes.routes());
app.use(educationRoutes.routes());
app.use(interestRoutes.routes());
