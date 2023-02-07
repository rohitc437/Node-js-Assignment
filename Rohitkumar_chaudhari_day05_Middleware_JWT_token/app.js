require("./db/connect");
const express = require("express");
const app = express();

const login = require("./routes/Login");

const port = 3000;
app.use(express.json());
app.use("/users", login);

app.listen(port, () => {
  console.log("server is connect to 3000");
});
