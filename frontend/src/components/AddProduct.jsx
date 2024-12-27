import React, { useState } from 'react';
import { productName } from './allProductName';
import { useDispatch, useSelector } from "react-redux"
import { addProduct } from '../store/seller/productSlice';


function AddProduct() {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const [product, setProduct] = useState({
    name: '',
    price: '',
    quantity: '',
  });

  const handleChange = (e) => {
    // console.log("handle change called")
    const { name, value } = e.target;
    console.log(name , value);
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));

  };

  // const handleFileChange = (e) => {
  //   setProduct({ ...product, file: e.target.files[0] });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(addProduct(product))
    .then((data) => console.log(data))
    
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <select
            name="name"
            value={product.name}
            onChange={handleChange}
            className="block w-full px-4 py-3 text-lg border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="" disabled>
              Select a product
            </option>
            {productName.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-1">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="block w-full px-4 py-3 text-lg border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-1">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            placeholder="Enter quantity"
            className="block w-full px-4 py-3 text-lg border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full py-3 text-lg bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
