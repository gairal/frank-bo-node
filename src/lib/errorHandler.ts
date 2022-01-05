import { Middleware } from "koa";

import { logger } from "./logger";

export const errorHandler: Middleware = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err instanceof Error) {
      logger.error(err.message);

      ctx.status = 500;
      ctx.body = { message: err.message };
    }
  }
};
