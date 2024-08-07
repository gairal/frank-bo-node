import Router from "@koa/router";

import { getAll } from "../model/interest";

export const interestRouter = new Router({ prefix: "/interests" });

interestRouter.get("/", async (ctx) => {
  const result = await getAll();
  ctx.body = result;
});
