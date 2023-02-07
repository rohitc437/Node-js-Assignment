require("./db/connect");
const express = require("express");
const app = express();

const products = require("./routes/product");

const port = 3000;
app.use(express.json());
app.use("/products", products);

app.listen(port, () => {
  console.log("server is connect to 3000");
});
