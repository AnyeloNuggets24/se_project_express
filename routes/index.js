const router = require("express").Router();
const { login, createUser } = require("../controllers/users");
const { auth } = require("../middlewares/auth");
const { getClothingItems } = require("../controllers/clothingItems");
const clothingItemsRouter = require("./clothingItems");
const usersRouter = require("./users");
const { NOT_FOUND_ERROR_CODE } = require("../utils/error");

// Public route to get clothing items without authentication
router.get("/items", getClothingItems);

// POST /signin and /signup routes
router.post("/signin", login);
router.post("/signup", createUser);

// Apply authentication middleware to all routes below
router.use(auth);

router.use("/items", clothingItemsRouter);
router.use("/users", usersRouter);

router.use((req, res) => {
  res
    .status(NOT_FOUND_ERROR_CODE)
    .send({ message: "Requested resource not found" });
});

module.exports = router;
