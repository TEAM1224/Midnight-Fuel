const Product = require("../../model/productModel");

const addProduct = async (req, res) => {
  try {
    const {sellerId} = req.params;
    const { price, quantity } = req.body;

    if (!sellerId || !price || !quantity) {
      return res.status(400).json({
        success: false,
        message: "insufficient Data",
      });
    }

    const newAddedProduct = new Product({
      sellerId,
      price,
      totalStock: quantity,
    });

    await newAddedProduct.save();

    res.status(200).json({
      success: true,
      message: "Product added Successfully",
      data: newAddedProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error Occur",
    });
  }
};

const editProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const { price, quantity, totalStock } = req.body;

    if (!price || !quantity || !totalStock || !productId) {
      return res.status(400).json({
        success: false,
        message: "insufficient Data",
      });
    }

    let findProduct = await Product.findOne({ _id: productId });
    if (!findProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    findProduct.price = price || findProduct.price;
    findProduct.quantity = quantity || findProduct.quantity;
    findProduct.totalStock = totalStock || findProduct.totalStock;

    await findProduct.save();

    res.status(200).json({
      success: true,
      data: findProduct,
      message: "product updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error Occur",
    });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.productId;
  const product = await Product.findByIdAndDelete(productId);
  if (!product) {
    return res
      .status(404)
      .json({ message: "Product not found", success: false });
  } else {
    return res.status(200).json({ message: "Product deleted successfully",success : true });
  }
};

const FetchProduct = async (req, res) => {
  const sellerId = req.params.sellerId;
  const products = await Product.find({ sellerId });
  if (!products) {
    return res.status(404).json({ message: "No products found",success : false });
  } else {
    return res.status(200).json({data : products ,success : true});
  }
};


const tildProduct = async(req, res)=>{
    return "baba ka dhaba"
}


module.exports = { addProduct, editProduct ,FetchProduct,deleteProduct, tildProduct };
