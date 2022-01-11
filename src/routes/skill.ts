import * as Router from "koa-router";

import { getAll, getAllByCategory } from "../model/skill";

export const skillRouter = new Router({ prefix: "/skills" });

skillRouter.get("/", async (ctx) => {
  const result = await getAll();
  ctx.body = result;
});

skillRouter.get("/categories", async (ctx) => {
  const result = await getAllByCategory();
  ctx.body = result;
});
