const { verifyToken } = require("../../config/jwt.js");
const userModel = require("../../model/userModel.js");

const addToCart = async (req, res) => {
  try {

    const { token } = req.headers;
    const decoded = verifyToken(token);

    const { userId } = decoded;
    const { productId } = req.body;

    const user = await userModel.findById(userId);

    const productIndex = user.cart.findIndex(
      (product) => product.id == productId
    );

    if (productIndex > -1) {
      user.cart[productIndex].quantity += 1;
      user.markModified("cart");
    } else {
      user.cart.push({ id: productId, quantity: 1 });
    }

    await user.save();

    res.json({ message: "Product added to cart", success: true });
  } catch (err) {
    console.error("Error is:", err);

    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

const removeCartItems = async (req, res) => {
  try {
    const { token } = req.headers;
    const decoded = verifyToken(token);
    const { userId } = decoded;
    const { productId } = req.body;
    const user = await userModel.findById(userId);

    const productIndex = user.cart.findIndex(
      (product) => product.id == productId
    );
    if (productIndex > -1) {
      user.cart.splice(productIndex, 1);
      await user.save();
      res.json({ message: "Product removed from cart", success: true });
    } else {
      res.json({ message: "Product not found in cart", success: false });
    }
  } catch (error) {
    console.error("Error is:", error);
    res.status(400).json({ success: false, message: error.message });
  }
};

const updateCartItems = async (req, res) => {
  try {
    
    const { token } = req.headers;
    const decoded = verifyToken(token);
    console.log(decoded);

    const { userId } = decoded;
    const { productId, quantity } = req.body;

    
    const user = await userModel.findById(userId);

    const productIndex = user.cart.findIndex(
      (product) => product.id == productId
    );

    if (productIndex > -1) {
      user.cart[productIndex].quantity = quantity;
      user.markModified("cart");
    } else {
      user.cart.push({ id: productId, quantity });
      console.log("Added new product to cart:", { id: productId, quantity });
    }

    await user.save();

    res.json({ message: "Product update to cart", success: true });
  } catch (err) {
    console.error("Error is:", err);

    res.status(400).json({
      success: "false",
      message: err.message,
    });
  }
};


const getUserCart = async(req,res)=>{
  try {
    const {token} = req.headers;
    // console.log(token);
    
    const decoded = verifyToken(token);
    const {userId} = decoded;
    const user = await userModel.findById(userId);
    const cartData = user.cart;
    res.send({success : true,cartData})
  } catch (error) {
    console.error("Error is:", error);
    res.status(400).json({success : false,message : error.message})
  }
}

module.exports = { addToCart, removeCartItems, updateCartItems,getUserCart };
