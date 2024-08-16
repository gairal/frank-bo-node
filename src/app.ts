import cors from "@koa/cors";
import Koa from "koa";
import helmet from "koa-helmet";
import logger from "koa-logger";

import { LOG_LEVEL } from "./env";
import { errorHandler } from "./lib/errorHandler";
import { educationRouter } from "./routes/education";
import { interestRouter } from "./routes/interest";
import { skillRouter } from "./routes/skill";
import { travelRouter } from "./routes/travel";
import { workRouter } from "./routes/work";

export const app = new Koa();

/** SETUP */

if (LOG_LEVEL === "debug") {
  app.use(logger());
}

app
  .use(errorHandler)
  .use(helmet())
  .use(
    cors({
      allowMethods: ["GET"],
      origin: (ctx) =>
        ctx.header.origin?.includes("gairal.")
          ? ctx.header.origin
          : "http://localhost:3000",
    }),
  );

/** ROUTES */

app
  .use(educationRouter.routes())
  .use(educationRouter.allowedMethods())
  .use(interestRouter.routes())
  .use(interestRouter.allowedMethods())
  .use(skillRouter.routes())
  .use(skillRouter.allowedMethods())
  .use(travelRouter.routes())
  .use(travelRouter.allowedMethods())
  .use(workRouter.routes())
  .use(workRouter.allowedMethods());
