const router = require("express").Router();
const { login, createUser } = require("../controllers/users");
const { auth } = require("../middlewares/auth");

const clothingItemsRouter = require("./clothingItems");
const usersRouter = require("./users");

// POST /signin and /signup routes
router.post("/signin", login);
router.post("/signup", createUser);

// Apply authentication middleware to all routes below
router.use(auth);


router.use("/items", clothingItemsRouter);
router.use("/users", usersRouter);

router.use((req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

module.exports = router;
