'use strict';

const { BusinessError } = require('naf-core').Error;

module.exports = (options = {}) => {
  return async function(ctx, next) {
    try {
      await next();
    } catch (err) {
      if (err instanceof BusinessError && ctx.acceptJSON) {
        // 业务错误
        if (options.details) {
          ctx.body = { errcode: err.errcode, errmsg: err.errmsg, details: err.details };
        } else {
          ctx.body = { errcode: err.errcode, errmsg: err.errmsg };
        }
        ctx.status = 200;
        ctx.logger.warn(`BusinessError: ${err.errcode}, ${err.errmsg}`);
        ctx.logger.debug(err);
      } else {
        throw err;
      }
    }
  };
};
