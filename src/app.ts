import * as Koa from "koa";
import * as logger from "koa-logger";
import * as cors from "@koa/cors";

import { skillRouter } from "./routes/skill";
import { travelRouter } from "./routes/travel";
import { workRouter } from "./routes/work";
import { educationRouter } from "./routes/education";
import { interestRouter } from "./routes/interest";
import { LOG_LEVEL } from "./env";
import { errorHandler } from "./lib/errorHandler";

export const app = new Koa();

/** SETUP */

if (LOG_LEVEL === "debug") {
  app.use(logger());
}

app.use(errorHandler);
app.use(
  cors({
    allowMethods: ["GET"],
    origin: (ctx) => {
      if (
        ["gairal.com", "gairal.rocks"].some((domain) =>
          ctx.hostname.includes(domain)
        )
      ) {
        return "*";
      }

      return "http://localhost:5000";
    },
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
