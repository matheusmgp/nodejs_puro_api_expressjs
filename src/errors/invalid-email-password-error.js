const httpStatusCodes = require('./status-codes/http-status-codes');
const BaseError = require('./base-error');

class InvalidEmailPasswordError extends BaseError {
  constructor(message, statusCode = httpStatusCodes.UNAUTHORIZED) {
    super(message, statusCode);
  }
}

module.exports = InvalidEmailPasswordError;
