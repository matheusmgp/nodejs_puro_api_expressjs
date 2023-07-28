const httpStatusCodes = require('../errors/status-codes/http-status-codes');
const { responseHttp, responseHttpException } = require('../httpResponse/response');
const ProductService = require('../services/product.service');
const { handledObjectIdErrors, handledValidationError } = require('../errors/mongoose-error-handler');
const { default: mongoose } = require('mongoose');
const BaseError = require('../errors/base-error');
module.exports = {
  async getAll(req, res) {
    try {
      responseHttp(await ProductService.getAll(), res);
    } catch (err) {
      responseHttpException('Internal Server Error', 'GET', res, httpStatusCodes.INTERNAL_SERVER);
    }
  },
  async getByid(req, res) {
    try {
      responseHttp(await ProductService.getById(req.params.id), res);
    } catch (err) {
      if (err instanceof mongoose.Error.CastError) {
        const clientErrors = handledObjectIdErrors(err);
        responseHttpException(clientErrors.error, 'GET', res, clientErrors.statusCode);
      } else if (err instanceof BaseError) {
        responseHttpException(err.message, 'GET', res, err.statusCode);
      } else {
        responseHttpException('Internal Server Error', 'GET', res, httpStatusCodes.INTERNAL_SERVER);
      }
    }
  },
  async create(req, res) {
    const body = req.body;
    try {
      responseHttp(await ProductService.create(body), res);
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
  async update(req, res) {
    try {
      const id = req.params.id;
      const body = req.body;
      responseHttp(await ProductService.update(id, body), res);
    } catch (err) {
      responseHttpException('Internal Server Error', 'PUT', res, httpStatusCodes.INTERNAL_SERVER);
    }
  },
};
