import http from 'http';
import { logger } from '../globals';

class Utils {
  // request time
  static async requestTime(ctx, next) {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    logger().warn(`${ctx.method} ${ctx.url} - ${ms}`);
  }

  static log(ctx, err) {
    logger().error(err.message);
    ctx.status = 500;
    ctx.body = err.message || http.STATUS_CODES[ctx.status];
  }

  static json(ctx) {
    ctx.body = '';
  }
}

export default Utils;
