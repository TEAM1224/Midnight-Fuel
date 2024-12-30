import React from 'react';
import { addCartItmes } from '../Slice/CartItemSlice';
import { useDispatch, useSelector } from 'react-redux';

function Product({ product }) {

  const cartItmes = useSelector((state) => state.cart.cartItems);
  // console.log(cartItmes);
  
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h2 className="text-lg font-semibold">{product.productName}</h2>
      <p className="text-sm text-gray-600">
        <strong>Room No.:</strong> {product.roomNo}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Hostel Name:</strong> {product.hostelName}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Price:</strong> ₹{product.price}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Quantity:</strong> {product.quantity}
      </p>
      <button
        onClick={() => dispatch(addCartItmes(product.productId))}
        className="mt-4 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-900 transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
