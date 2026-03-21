const router = require("express").Router();
const {
  validateClothingItemBody,
  validateItemId,
} = require("../middlewares/validation");

const {
  createClothingItem,
  likeItem,
  dislikeItem,
  deleteClothingItem,
} = require("../controllers/clothingItems");

router.post("/", validateClothingItemBody, createClothingItem);
router.delete("/:itemId", validateItemId, deleteClothingItem);
router.put("/:itemId/likes", validateItemId, likeItem);
router.delete("/:itemId/likes", validateItemId, dislikeItem);

module.exports = router;
