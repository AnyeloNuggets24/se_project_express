const router = require("express").Router();

const clothingItemsRouter = require("./clothingItems");

const usersRouter = require("./users");

router.use("/items", clothingItemsRouter);
router.use("/users", usersRouter);

router.use((req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

module.exports = router;
