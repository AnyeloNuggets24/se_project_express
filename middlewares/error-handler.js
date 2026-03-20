const { INTERNAL_SERVER_ERROR_CODE } = require("../utils/error");

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  console.error(err);

  const { statusCode = INTERNAL_SERVER_ERROR_CODE, message } = err;

  return res.status(statusCode).send({
    message:
      statusCode === INTERNAL_SERVER_ERROR_CODE
        ? "An error occurred on the server"
        : message,
  });
};

module.exports = errorHandler;
