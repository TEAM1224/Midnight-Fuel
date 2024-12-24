const Product = require("../../model/productModel")


const addProduct = async(req, res)=>{
    const {
        title, 
        description, 
        category, 
        price, 
        totalStock
    } = req.body
}