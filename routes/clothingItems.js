const router = require("express").Router();
const { auth } = require("../middlewares/auth");
const {
  validateClothingItemBody,
  validateItemId,
} = require("../middlewares/validation");

const {
  getClothingItems,
  createClothingItem,
  likeItem,
  dislikeItem,
  deleteClothingItem,
} = require("../controllers/clothingItems");

router.get("/", getClothingItems); // public
router.use(auth); // protect everything below
router.post("/", validateClothingItemBody, createClothingItem);
router.delete("/:itemId", validateItemId, deleteClothingItem);
router.put("/:itemId/likes", validateItemId, likeItem);
router.delete("/:itemId/likes", validateItemId, dislikeItem);

module.exports = router;
