const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));



app.get('/',(req, res)=>{
  res.status(200).render("Login");
})

app.post('/login',(req,res)=>{
  const {login_txt,  password_txt} = req.body;
  if(login_txt === 'admin' && password_txt === 'admin')res.render('login_accept');
  else res.render('login_failed');
})

app.listen(5000,()=>{
  console.log("Server started on Port 5000")
});