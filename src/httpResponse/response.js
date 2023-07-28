module.exports = {
  responseHttp(data, res) {
    res.status(200).json(data);
  },
  responseHttpException(error, method, res, code) {
    res.status(code).send(new HttpExceptionResponse(code, error, method));
  },
};

class HttpExceptionResponse {
  constructor(statusCode, error, method) {
    this.error = error;
    this.method = method;
    this.statusCode = statusCode;
    this.timestamp = new Date().toISOString();
  }
  statusCode;
  error;
  timestamp;
  method;
}
