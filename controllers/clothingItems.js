const ClothingItem = require("../models/clothingItem");
const ClothingItems = require("../models/clothingItem");

// GET /clothing-items
const getClothingItems = (req, res) => {
  ClothingItem.find({})
    .then((items) => res.status(200).send(items))
    .catch((err) => {
      console.error(err);
      return res.status(500).send({ message: err.message });
    });
};

const createClothingItem = (req, res) => {
  const { name, weather, imageUrl } = req.body;

  ClothingItem.create({ name, weather, imageUrl, owner: req.user._id })

    .then((item) => res.status(201).send(item))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).send({ message: err.message });
      }
      console.error(err);
      return res.status(500).send({ message: err.message });
    });
};

const likeItem = (req, res) => {
  ClothingItems.findByIdAndUpdate(
    req.params.itemId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .then((item) => {
      if (!item) {
        return res.status(404).send({ message: "Item not found" });
      }
      return res.status(200).send(item);
    })
    .catch((err) => {
      console.error(err);
      return res.status(400).send({ message: err.message });
    });
};

const dislikeItem = (req, res) => {
  ClothingItems.findByIdAndUpdate(
    req.params.itemId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .then((item) => {
      if (!item) {
        return res.status(404).send({ message: "Item not found" });
      }
      return res.status(200).send(item);
    })
    .catch((err) => {
      console.error(err);
      return res.status(400).send({ message: err.message });
    });
};

const deleteClothingItem = (req, res) => {
  ClothingItem.findByIdAndDelete(req.params.itemId)
    .orFail(new Error("Item not found"))
    .then((item) => {
      if (item.owner.toString() !== req.user._id) {
        return res.status(403).send({ message: "Forbidden" });
      }

      return ClothingItem.findByIdAndDelete(req.params.itemId)
        .then(() => res.status(200).send({ message: "Item deleted" }))
        .catch((err) => {
          if (err.name === "CastError") {
            return res.status(400).send({ message: "Invalid item ID" });
          }
          if (err.message === "Item not found") {
            return res.status(404).send({ message: "Item not found" });
          }
          console.error(err);
          return res.status(500).send({ message: err.message });
        });
    });
};

module.exports = {
  getClothingItems,
  createClothingItem,
  likeItem,
  dislikeItem,
  deleteClothingItem,
};
