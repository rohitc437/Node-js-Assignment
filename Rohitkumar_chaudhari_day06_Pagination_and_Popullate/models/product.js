const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: String,
  discountPercentage: String,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: Array,
});

module.exports = mongoose.model("product", ProductsSchema);
