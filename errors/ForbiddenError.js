const AppError = require("./AppError");
const { FORBIDDEN_ERROR_CODE } = require("../utils/error");

class ForbiddenError extends AppError {
  constructor(message) {
    super(message, FORBIDDEN_ERROR_CODE);
  }
}

module.exports = ForbiddenError;
