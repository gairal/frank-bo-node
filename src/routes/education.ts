import * as Router from "koa-router";

import { getAll, getById } from "../model/education";

export const educationRouter = new Router({ prefix: "/educations" });

educationRouter.get("/", async (ctx) => {
  const result = await getAll();
  ctx.body = result;
});

educationRouter.get("/:id", async (ctx) => {
  const result = await getById(ctx.params.id);
  ctx.body = result;
});
