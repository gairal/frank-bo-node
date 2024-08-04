import type { Middleware } from "koa";

import { logger } from "./logger";

export const errorHandler: Middleware = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = 500;

    if (err instanceof Error) {
      logger.error(err.message);
      ctx.body = { message: err.message };
    }
  }
};
