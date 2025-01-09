const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:String,
    sellerId: String,
    price: Number,
    totalStock: {
        type: Number,
        default : 0
    },
},{timestamps: true})

module.exports = mongoose.model("Product", productSchema);