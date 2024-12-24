import React, { useState } from 'react';
import { listProduct } from './allProductName';

function Listitems() {
  const [products, setProducts] = useState(listProduct);

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const handleUpdate = (index) => {
    const updatedName = prompt('Enter new product name:', products[index].name);
    const updatedQuantity = prompt('Enter new quantity:', products[index].quantity);
    const updatedPrice = prompt('Enter new price:', products[index].price);

    if (updatedName && updatedQuantity && updatedPrice) {
      const updatedProducts = [...products];
      updatedProducts[index] = {
        ...updatedProducts[index],
        name: updatedName,
        quantity: parseInt(updatedQuantity, 10),
        price: parseInt(updatedPrice, 10),
      };
      setProducts(updatedProducts);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Product List</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Price</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{product.name}</td>
              <td className="border border-gray-300 px-4 py-2">{product.quantity}</td>
              <td className="border border-gray-300 px-4 py-2">${product.price}</td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleUpdate(index)}
                    className="px-4 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Listitems;
