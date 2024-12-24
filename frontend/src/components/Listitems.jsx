import React, { useState } from 'react';
import { listProduct } from './allProductName';

function Listitems() {
  const [products, setProducts] = useState(listProduct);
  const [editIndex, setEditIndex] = useState(null);

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const handleUpdate = (index) => {
    if (editIndex === index) {
      const updatedProducts = [...products];
      updatedProducts[index] = {
        ...updatedProducts[index],
        quantity: updatedProducts[index].quantity,
        price: updatedProducts[index].price,
      };
      setProducts(updatedProducts);
      setEditIndex(null); // Exit edit mode
    } else {
      setEditIndex(index); // Enter edit mode
    }
  };

  const handleInputChange = (e, index, field) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = e.target.value;
    setProducts(updatedProducts);
  };

  return (
    <div className="w-full h-screen p-8 bg-white rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Product List</h2>

      {/* Scrollable container for products */}
      <div className="w-full h-full max-h-[80vh] overflow-y-auto">
        {/* Container for each product */}
        {products.map((product, index) => (
          <div key={index} className="flex items-center justify-between border-b border-gray-300 py-6 text-xl">
            <div className="flex-1">
              <span className="font-medium">{product.name}</span>
            </div>

            <div className="flex-1">
              {editIndex === index ? (
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => handleInputChange(e, index, 'quantity')}
                  className="border border-gray-300 p-3 w-24 text-lg"
                />
              ) : (
                product.quantity
              )}
            </div>

            <div className="flex-1">
              {editIndex === index ? (
                <input
                  type="number"
                  value={product.price}
                  onChange={(e) => handleInputChange(e, index, 'price')}
                  className="border border-gray-300 p-3 w-32 text-lg"
                />
              ) : (
                `$${product.price}`
              )}
            </div>

            <div className="flex space-x-6">
              <button
                onClick={() => handleUpdate(index)}
                className={`px-6 py-3 ${
                  editIndex === index ? 'bg-green-500' : 'bg-yellow-500'
                } text-white rounded-lg hover:bg-${editIndex === index ? 'green-600' : 'yellow-600'} focus:outline-none text-lg`}
              >
                {editIndex === index ? 'Save' : 'Edit'}
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none text-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listitems;
