import * as Router from "koa-router";

import { getAll } from "../model/work";

export const workRouter = new Router({ prefix: "/works" });

workRouter.get("/", async (ctx) => {
  const result = await getAll();
  ctx.body = result;
});
