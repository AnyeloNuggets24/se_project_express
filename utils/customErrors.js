const {
  BAD_REQUEST_ERROR_CODE,
  UNAUTHORIZED_ERROR_CODE,
  FORBIDDEN_ERROR_CODE,
  NOT_FOUND_ERROR_CODE,
  CONFLICT_ERROR_CODE,
} = require("./error");

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

class BadRequestError extends AppError {
  constructor(message) {
    super(message, BAD_REQUEST_ERROR_CODE);
  }
}

class UnauthorizedError extends AppError {
  constructor(message) {
    super(message, UNAUTHORIZED_ERROR_CODE);
  }
}

class ForbiddenError extends AppError {
  constructor(message) {
    super(message, FORBIDDEN_ERROR_CODE);
  }
}

class NotFoundError extends AppError {
  constructor(message) {
    super(message, NOT_FOUND_ERROR_CODE);
  }
}

class ConflictError extends AppError {
  constructor(message) {
    super(message, CONFLICT_ERROR_CODE);
  }
}

module.exports = {
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
};
