const mongoose = require('mongoose');


const productSchema = mongoose.Schema({

    productName:String,
    material:String,
    description:String,
    price:Number
})

module.exports = mongoose.model('Products', productSchema);