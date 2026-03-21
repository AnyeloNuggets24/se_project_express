const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");
const UnauthorizedError = require("../errors/UnauthorizedError");
const { UNAUTHORIZED_ERROR_CODE } = require("../utils/error");

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    const error = new UnauthorizedError("Authorization required");
    error.statusCode = UNAUTHORIZED_ERROR_CODE;
    return next(error);
  }

  const token = authorization.replace("Bearer ", "");

  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    const error = new UnauthorizedError("Authorization required");
    error.statusCode = UNAUTHORIZED_ERROR_CODE;
    return next(error);
  }

  req.user = payload;

  return next();
};

module.exports = { auth };
