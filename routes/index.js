const router = require("express").Router();

const clothingItemsRouter = require("./clothingItems");

const usersRouter = require("./users");

router.use("/clothing-items", clothingItemsRouter);
router.use("/users", usersRouter);

module.exports = router;
