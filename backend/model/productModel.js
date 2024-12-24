const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    price: Number,
    totalStock: Number,
},{timestamps: true})

module.exports = mongoose.model("Product", productSchema);