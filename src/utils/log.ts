import { STATUS_CODES } from "http";
import { ParameterizedContext } from "koa";
import { logger } from "../logger";

export const log = (ctx: ParameterizedContext, err: Error) => {
  logger.error(err.message);
  ctx.status = 500;
  ctx.body = err.message || STATUS_CODES[ctx.status];
};
