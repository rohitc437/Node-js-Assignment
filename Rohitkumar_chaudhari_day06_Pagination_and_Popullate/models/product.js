const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  discountPercentage: { type: String, required: true },
  rating: Number,
  stock: Number,
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: Array,
});
const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  cart: [{ type: "ObjectId", ref: "product" }],
});

const User = mongoose.model("user", UserSchema);
const Product = mongoose.model("product", ProductsSchema);

module.exports = { Product, User };
