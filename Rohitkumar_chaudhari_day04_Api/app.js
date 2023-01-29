require("./db/connect");
const express = require("express");
const app = express();

const profiles = require("./routes/profiles");

const port = 3000;
app.use(express.json());
app.use("/profiles", profiles);

app.listen(port, () => {
  console.log("server is connect to 3000");
});
