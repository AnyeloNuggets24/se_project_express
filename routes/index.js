const router = require("express").Router();
const { login, createUser } = require("../controllers/users");
const { auth } = require("../middlewares/auth");
const { getClothingItems } = require("../controllers/clothingItems");
const {
  validateUserBody,
  validateLoginBody,
} = require("../middlewares/validation");
const clothingItemsRouter = require("./clothingItems");
const usersRouter = require("./users");
const NotFoundError = require("../errors/NotFoundError");

// Public route to get clothing items without authentication
router.get("/items", getClothingItems);

// POST /signin and /signup routes
router.post("/signin", validateLoginBody, login);
router.post("/signup", validateUserBody, createUser);

// Apply authentication middleware to all routes below
router.use(auth);

router.use("/items", clothingItemsRouter);
router.use("/users", usersRouter);

router.use((req, res, next) => {
  return next(new NotFoundError("Requested resource not found"));
});

module.exports = router;
