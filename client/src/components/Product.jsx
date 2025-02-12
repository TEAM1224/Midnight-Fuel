import React from "react";
import { addCartItmes } from "../Slice/CartItemSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Product({ product }) {
  const dispatch = useDispatch();
  const backendUrl = useSelector((state) => state.backendUrl);   
  // Memoized click handler
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    // console.log(product);
    
    try {
      const token = localStorage.getItem("token");
      if(!token){
        toast.error("Please login to add product to cart");
        navigate('/login');
        return;
      }
      const response = await axios.post(
        backendUrl + "/api/user/addtoCart",
        { productId: product._id },
        {
          headers: {
            token
          },
        }
      );
      // console.log(response.data,"data");
      if (response.data.success) {
        dispatch(addCartItmes(product.productId)); // Pass productId or full product based on the reducer's requirements
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add product to cart");
    }
  };

  return (
    <div className="border rounded-lg shadow-lg p-6 bg-slate-800 text-white transition-transform transform hover:scale-105 hover:shadow-2xl">
      {/* Product Details */}
      <h2 className="text-2xl font-semibold mb-2 text-gray-100">
        {product.productName}
      </h2>
      <p className="text-sm text-gray-300">
        <strong>Room No.:</strong> {product.roomNo}
      </p>
      <p className="text-sm text-gray-300">
        <strong>Hostel Name:</strong> {product.hostelName}
      </p>
      <p className="text-sm text-gray-300">
        <strong>Price:</strong> ₹{product.price}
      </p>
      <p className="text-sm text-gray-300 mb-4">
        <strong>TotalStock:</strong> {product.totalStock}
      </p>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
