const express = require("express");
const {
  AllProducts,
  OneProduct,
  AddProduct,
} = require("../controllers/product");
const router = express.Router();

router.route("/").get(AllProducts).post(AddProduct);
router.route("/:id").get(OneProduct);

module.exports = router;
