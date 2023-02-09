const mongoose = require("mongoose");

const EmployeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  technology: String,
});

const techSchema = new mongoose.Schema({
  Employe: String,
  code: String,
});

const Tech = mongoose.model("technology", techSchema);
const Employe = mongoose.model("employe", EmployeSchema);

module.exports = {
  Employe,
  Tech,
};
