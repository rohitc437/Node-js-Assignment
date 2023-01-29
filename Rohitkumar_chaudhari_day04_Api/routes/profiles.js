const express = require("express");
const {
  AllProfiles,
  OneProfile,
  AddProfile,
} = require("../controllers/profiles");
const router = express.Router();

router.route("/").get(AllProfiles).post(AddProfile);
router.route("/:id").get(OneProfile);

module.exports = router;
