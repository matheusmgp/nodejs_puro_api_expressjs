const handledValidationError = (err) => {
  return { statusCode: 422, error: err.message };
};

const handledObjectIdErrors = (err) => {
  return { statusCode: 422, error: err.message };
};

module.exports = {
  handledValidationError,
  handledObjectIdErrors,
};
