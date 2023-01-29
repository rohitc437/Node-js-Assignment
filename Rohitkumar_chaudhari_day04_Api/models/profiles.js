const mongoose = require("mongoose");

const ProfilesSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
});

module.exports = mongoose.model("profiles", ProfilesSchema);
