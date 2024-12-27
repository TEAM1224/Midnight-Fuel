import React, { useState } from "react";
import { data } from "./allProduct";

function Home() {
  // State to manage the cart
  const [cart, setCart] = useState([]);

  // State to manage the selected hostel for filtering
  const [selectedHostel, setSelectedHostel] = useState("All");
  
  // State to toggle the dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to handle adding an item to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.productName} has been added to the cart!`);
  };

  // Filter products based on the selected hostel
  const filteredData = selectedHostel === "All" 
    ? data 
    : data.filter((product) => product.hostelName === selectedHostel);

  // Toggle the dropdown menu visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Products</h1>
        
        {/* Hostel Filter Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-900"
          >
            Filter by Hostel
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-md z-10">
              <button
                onClick={() => { setSelectedHostel("All"); toggleDropdown(); }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                All
              </button>
              <button
                onClick={() => { setSelectedHostel("Aryabhatta"); toggleDropdown(); }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Aryabhatta
              </button>
              <button
                onClick={() => { setSelectedHostel("Chakanya"); toggleDropdown(); }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Chakanya
              </button>
              <button
                onClick={() => { setSelectedHostel("Bose"); toggleDropdown(); }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Bose
              </button>
              <button
                onClick={() => { setSelectedHostel("Sarabhai"); toggleDropdown(); }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sarabhai
              </button>
              <button
                onClick={() => { setSelectedHostel("Trisha"); toggleDropdown(); }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Trisha
              </button>
              <button
                onClick={() => { setSelectedHostel("Gargi"); toggleDropdown(); }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Gargi
              </button>
              <button
                onClick={() => { setSelectedHostel("kalpana"); toggleDropdown(); }}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Kalpana
              </button>
              </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredData.map((product) => (
          <div
            key={product.productId}
            className="border rounded-lg shadow-md p-4 bg-white"
          >
            <h2 className="text-lg font-semibold">{product.productName}</h2>
            <p className="text-sm text-gray-600">
              <strong>Room No.</strong> {product.roomNo}
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
              onClick={() => addToCart(product)}
              className="mt-4 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-900 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
