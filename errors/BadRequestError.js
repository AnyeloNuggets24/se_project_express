const AppError = require("./AppError");
const { BAD_REQUEST_ERROR_CODE } = require("../utils/error");

class BadRequestError extends AppError {
  constructor(message) {
    super(message, BAD_REQUEST_ERROR_CODE);
  }
}

module.exports = BadRequestError;
