const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

module.exports = mongoose.model("login", LoginSchema);
