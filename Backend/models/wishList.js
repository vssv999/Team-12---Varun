const mongoose = require("mongoose");

const wishlistSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const WishList = mongoose.model("wishlist", wishlistSchema);

module.exports = WishList;
