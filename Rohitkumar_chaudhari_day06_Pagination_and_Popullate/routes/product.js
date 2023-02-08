const express = require("express");
const {
  AllProducts,
  OneProduct,
  AddProduct,
  Adduser,
  AllUsers,
  UpdateUser,
} = require("../controllers/product");
const router = express.Router();

router.route("/user").get(AllUsers).post(Adduser);
router.route("/user/:id").put(UpdateUser);
router.route("/product").get(AllProducts).post(AddProduct);
router.route("/:id").get(OneProduct);

module.exports = router;
