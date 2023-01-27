const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5000,()=>{
    console.log("Server started on 5000")
})
