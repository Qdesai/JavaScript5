import profile from "../../src/Components/Profile.js";
const express = require('express');
const routes = express.Router();
const Product = require('../models/Product');


routes.get('/', (req,res)=>{
    res.send("this is the preductsss");
});

routes.post('/', (req,res)=>{
    const product = new Product({
        productName: req.body.productName,
        material: req.body.material,
        description: req.body.description,
        price: req.body.price
        });

        product.save().then((data)=>{
            console.log("created ");
        }).catch((err)=>{
            res.json({message:err})
        })
    })



module.exports = routes;