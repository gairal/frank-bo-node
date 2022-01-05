import * as Router from "koa-router";

import {
  getAll,
  getAllByCategory,
  getByCategory,
  getById,
} from "../model/interest";

export const interestRouter = new Router({ prefix: "/interests" });

interestRouter.get("/", async (ctx) => {
  const result = await getAll();
  ctx.body = result;
});

interestRouter.get("/categories", async (ctx) => {
  const result = await getAllByCategory();
  ctx.body = result;
});

interestRouter.get("/:id", async (ctx) => {
  const result = await getById(ctx.params.id);
  ctx.body = result;
});

interestRouter.get("/categories/:category", async (ctx) => {
  const result = await getByCategory(ctx.params.category);
  ctx.body = result;
});
