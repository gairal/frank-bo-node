import * as Router from "koa-router";

import { getAll } from "../model/education";

export const educationRouter = new Router({ prefix: "/educations" });

educationRouter.get("/", async (ctx) => {
  const result = await getAll();
  ctx.body = result;
});
