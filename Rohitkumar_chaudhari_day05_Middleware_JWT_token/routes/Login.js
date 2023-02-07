const express = require("express");
const { SignUp, SignIn } = require("../controllers/Login.Controller");
const router = express.Router();

router.route("/signup").post(SignUp);
router.route("/signin").post(SignIn);

module.exports = router;
