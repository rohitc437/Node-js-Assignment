const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/facebook";
mongoose.set("strictQuery", false);
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));
