const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const monsooge = require('mongoose');
const bodyParser = require('body-parser');


const prodRoute = require('./routes/products');

app.use('/products', prodRoute);

app.get('/test', (req,res)=>{
    res.send("gott itttttt..");
})

mongoose.connect("mongodb://mongo:Se7NTF7yM5hYJtjDYrqg@containers-us-west-155.railway.app:7834", ()=>{
    console.log("Database Connectedd!");
})

app.listen(5000);

