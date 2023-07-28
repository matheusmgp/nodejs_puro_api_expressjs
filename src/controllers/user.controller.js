const { default: mongoose } = require('mongoose');
const { responseHttp, responseHttpException } = require('../httpResponse/response');
const UserService = require('../services/user.service');
const { handledValidationError } = require('../errors/mongoose-error-handler');
const BaseError = require('../errors/base-error');
const httpStatusCodes = require('../errors/status-codes/http-status-codes');

module.exports = {
  async create(req, res) {
    const body = req.body;
    try {
      responseHttp(await UserService.create(body), res);
    } catch (err) {
      if (err instanceof mongoose.Error.ValidationError) {
        const clientErrors = handledValidationError(err);
        responseHttpException(clientErrors.error, 'POST', res, clientErrors.statusCode);
      } else if (err instanceof BaseError) {
        responseHttpException(err.message, 'POST', res, err.statusCode);
      } else {
        responseHttpException('Internal Server Error', 'POST', res, httpStatusCodes.INTERNAL_SERVER);
      }
    }
  },
  async login(req, res) {
    const body = req.body;
    try {
      responseHttp(await UserService.login(body), res);
    } catch (err) {
      if (err instanceof mongoose.Error.ValidationError) {
        const clientErrors = handledValidationError(err);
        responseHttpException(clientErrors.error, 'POST', res, clientErrors.statusCode);
      } else if (err instanceof BaseError) {
        responseHttpException(err.message, 'POST', res, err.statusCode);
      } else {
        responseHttpException('Internal Server Error', 'POST', res, httpStatusCodes.INTERNAL_SERVER);
      }
    }
  },
};
