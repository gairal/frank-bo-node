import http from 'http';

class Utils {
  // request time
  static async requestTime(ctx, next) {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`); // eslint-disable-line no-console
  }

  static log(ctx, err) {
    console.log(err.message); // eslint-disable-line no-console
    ctx.status = 500;
    ctx.body = err.message || http.STATUS_CODES[ctx.status];
  }

  static json(ctx) {
    ctx.body = '';
  }
}

export default Utils;