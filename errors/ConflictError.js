const AppError = require("./AppError");
const { CONFLICT_ERROR_CODE } = require("../utils/error");

class ConflictError extends AppError {
  constructor(message) {
    super(message, CONFLICT_ERROR_CODE);
  }
}

module.exports = ConflictError;
