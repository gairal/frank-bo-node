import * as Koa from "koa";
import * as helmet from "koa-helmet";
import * as logger from "koa-logger";
import * as cors from "@koa/cors";

import { educationRouter } from "./routes/education";
import { interestRouter } from "./routes/interest";
import { skillRouter } from "./routes/skill";
import { travelRouter } from "./routes/travel";
import { workRouter } from "./routes/work";
import { LOG_LEVEL } from "./env";
import { errorHandler } from "./lib/errorHandler";

export const app = new Koa();

/** SETUP */

if (LOG_LEVEL === "debug") {
  app.use(logger());
}

app.use(errorHandler);
app.use(helmet());
app.use(
  cors({
    allowMethods: ["GET"],
    origin: (ctx) =>
      ctx.header.origin?.includes("gairal.")
        ? ctx.header.origin
        : "http://localhost:3000",
  })
);

/** ROUTES */

app.use(educationRouter.routes());
app.use(educationRouter.allowedMethods());

app.use(interestRouter.routes());
app.use(interestRouter.allowedMethods());

app.use(skillRouter.routes());
app.use(skillRouter.allowedMethods());

app.use(travelRouter.routes());
app.use(travelRouter.allowedMethods());

app.use(workRouter.routes());
app.use(workRouter.allowedMethods());
