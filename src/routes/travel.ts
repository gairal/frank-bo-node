import * as Router from "koa-router";

import { getAll } from "../model/travel";

export const travelRouter = new Router({ prefix: "/travels" });

travelRouter.get("/", async (ctx) => {
  const result = await getAll();
  ctx.body = result;
});
