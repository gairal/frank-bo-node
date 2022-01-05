import * as Router from "koa-router";

import { getAll, getById, getSkillsFromId } from "../model/work";

export const workRouter = new Router({ prefix: "/works" });

workRouter.get("/", async (ctx) => {
  const result = await getAll();
  ctx.body = result;
});

workRouter.get("/:id", async (ctx) => {
  const result = await getById(ctx.params.id);
  ctx.body = result;
});

workRouter.get("/:id/skills", async (ctx) => {
  const result = await getSkillsFromId(ctx.params.id);
  ctx.body = result;
});
