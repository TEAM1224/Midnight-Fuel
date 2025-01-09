import React, { useState } from "react";
import { useSelector } from "react-redux"; // Import useSelector
import Product from "../components/Product";

function Home() {
  // State to manage the cart
  const [cart, setCart] = useState([]);

  // Fetch products from the Redux store
  const products = useSelector((state) => state.products);

  const [selectedHostel, setSelectedHostel] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Hostel names array
  const hostels = [
    "All",
    "Aryabhatta",
    "Chakanya",
    "Bose",
    "Sarabhai",
    "Trisha",
    "Gargi",
    "Kalpana",
  ];

  // Function to handle adding an item to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.productName} has been added to the cart!`);
  };

  // Filter products based on the selected hostel
  const filteredData =
    selectedHostel === "All"
      ? products
      : products.filter((product) => product.hostelName === selectedHostel);

  // Toggle the dropdown menu visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="p-6 bg-slate-600 min-h-screen text-white">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">All Products</h1>

        {/* Hostel Filter Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Filter by Hostel
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 border rounded-lg shadow-md z-10">
              {hostels.map((hostel) => (
                <button
                  key={hostel}
                  onClick={() => {
                    setSelectedHostel(hostel);
                    toggleDropdown();
                  }}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {hostel}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((product) => (
            <Product key={product.productId} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p className="col-span-full text-center text-lg">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
