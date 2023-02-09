const express = require("express");
const { employedata } = require("../controllers/employe");
const router = express.Router();

router.route("/").get(employedata);

module.exports = router;
