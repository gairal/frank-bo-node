import * as Router from "koa-router";

import {
  getAll,
  getAllByCategory,
  getByCategory,
  getById,
} from "../model/skill";

export const skillRouter = new Router({ prefix: "/skills" });

skillRouter.get("/", async (ctx) => {
  const result = await getAll();
  ctx.body = result;
});

skillRouter.get("/categories", async (ctx) => {
  const result = await getAllByCategory();
  ctx.body = result;
});

skillRouter.get("/:id", async (ctx) => {
  const result = await getById(ctx.params.id);
  ctx.body = result;
});

skillRouter.get("/categories/:category", async (ctx) => {
  const result = await getByCategory(ctx.params.category);
  ctx.body = result;
});
