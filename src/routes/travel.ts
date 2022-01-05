import * as Router from "koa-router";

import { getAll, getById } from "../model/travel";

export const travelRouter = new Router({ prefix: "/travels" });

travelRouter.get("/", async (ctx) => {
  const result = await getAll();
  ctx.body = result;
});

travelRouter.get("/:id", async (ctx) => {
  const result = await getById(ctx.params.id);
  ctx.body = result;
});
