require("./db/connect");
const express = require("express");
const app = express();

const employe = require("./routes/employe");

const port = 3000;
app.use(express.json());
app.use("/employe", employe);

app.listen(port, () => {
  console.log("server is connect to 3000");
});
