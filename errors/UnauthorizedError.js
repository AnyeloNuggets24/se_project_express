const AppError = require("./AppError");
const { UNAUTHORIZED_ERROR_CODE } = require("../utils/error");

class UnauthorizedError extends AppError {
  constructor(message) {
    super(message, UNAUTHORIZED_ERROR_CODE);
  }
}

module.exports = UnauthorizedError;
