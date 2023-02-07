const Product = require("../models/Product");

const AllProducts = async (req, res) => {
  let page = +req.query.page || 1;
  let limit = +req.query.limit || 5;
  let skip = (page - 1) * limit;
  const allProducts = await Product.find().limit(limit).skip(skip);
  res.status(200).json({ allProducts, total: allProducts.length });
};

const AddProduct = async (req, res) => {
  const Product = await Product.create(req.body);
  res.status(201).send(Product);
};

const OneProduct = async (req, res) => {
  const { id } = req.params;
  const Product = await Product.findById({ _id: id });
  res.status(200).send(Product);
};

module.exports = {
  AllProducts,
  OneProduct,
  AddProduct,
};
