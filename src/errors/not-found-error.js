const httpStatusCodes = require('./status-codes/http-status-codes');
const BaseError = require('./base-error');

class NotFoundError extends BaseError {
  constructor(message, statusCode = httpStatusCodes.NOT_FOUND) {
    super(message, statusCode);
  }
}

module.exports = NotFoundError;
