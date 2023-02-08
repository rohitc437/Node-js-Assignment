const { Product, User } = require("../models/Product");

const AllProducts = async (req, res) => {
  let page = +req.query.page || 1;
  let limit = +req.query.limit || 5;
  let skip = (page - 1) * limit;
  const allProducts = await Product.find().limit(limit).skip(skip);
  res.status(200).json({ allProducts, total: allProducts.length });
};

const AllUsers = async (req, res) => {
  const allProfiles = await User.find().populate("cart");
  res.status(200).send(allProfiles);
};

const Adduser = async (req, res) => {
  const profile = await User.create(req.body);
  res.status(201).send(profile);
};

const UpdateUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById({ _id: id });
  if (user) {
    const filter = id;
    const newUser = await User.findOneAndUpdate(
      { _id: filter },
      { $push: { cart: req.body.cartId } },
      { new: true }
    );
    return res.status(201).send(newUser);
  }
  return res.status(404).json({ message: "User not found!!!" });
};

const AddProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).send(product);
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
  AllUsers,
  Adduser,
  UpdateUser,
};
