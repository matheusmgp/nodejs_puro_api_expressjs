const { verify } = require('../services/auth.service');
const { responseHttpException } = require('../httpResponse/response');
const httpStatusCodes = require('../errors/status-codes/http-status-codes');
module.exports = (req, res, next) => {
  const header = req.headers.authorization;

  if (!header) return responseHttpException('No Token Provided', req.method, res, httpStatusCodes.UNAUTHORIZED);

  const parts = header.split(' ');

  if (parts.length > 2) return responseHttpException('Token Error', req.method, res, httpStatusCodes.UNAUTHORIZED);

  const [bearer, token] = parts;
  if (!/^Bearer$/i.test(bearer))
    return responseHttpException('Token Malformatted', req.method, res, httpStatusCodes.UNAUTHORIZED);

  try {
    const verified = verify(token);
    req.userId = verified.id;
    next();
  } catch (err) {
    responseHttpException(err.message, req.method, res, httpStatusCodes.UNAUTHORIZED);
  }
};
