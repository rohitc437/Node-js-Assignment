const express = require('express');
const bodyParser = require("body-parser");
const {header,navbar,Links,main_section,footer}= require('./Data')
const app = express();

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/header',(req,res)=>{
    res.send(header);
})

app.get('/navbar',(req,res)=>{
    res.send(navbar);
})

app.get('/links',(req,res)=>{
    res.send(Links);
})

app.get('/main_section',(req,res)=>{
    res.send(main_section);
})

app.get('/footer',(req,res)=>{
    res.send(footer);
})

app.listen(5000,()=>{
    console.log("Server started on 5000")
})
