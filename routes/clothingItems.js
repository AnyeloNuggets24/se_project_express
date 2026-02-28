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
router.put("/:id/likes", likeClothingItem);
router.delete("/:id/likes", dislikeClothingItem);

module.exports = router;
