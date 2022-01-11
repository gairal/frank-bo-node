import * as Router from "koa-router";

import { getAll } from "../model/skill";

export const skillRouter = new Router({ prefix: "/skills" });

skillRouter.get("/", async (ctx) => {
  const result = await getAll();
  ctx.body = result;
});
