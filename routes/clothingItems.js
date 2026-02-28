const router = require("express").Router();
const { auth } = require("../middlewares/auth");

const {
  getClothingItems,
  createClothingItem,
  likeItem,
  dislikeItem,
  deleteClothingItem,
} = require("../controllers/clothingItems");

router.get("/", getClothingItems); // public
router.use(auth); // protect everything below
router.post("/", createClothingItem);
router.delete("/:id", deleteClothingItem);
router.put("/:id/likes", likeItem);
router.delete("/:id/likes", dislikeItem);

module.exports = router;
