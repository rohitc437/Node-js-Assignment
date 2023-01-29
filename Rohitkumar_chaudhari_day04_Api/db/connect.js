const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/facebook";

mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));
