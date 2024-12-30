import React, { useState } from "react";
import { useSelector } from "react-redux"; // Import useSelector
import Product from "../components/Product";

function Home() {
  // State to manage the cart
  const [cart, setCart] = useState([]);

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
              {hostels.map((hostel) => (
                <button
                  key={hostel}
                  onClick={() => {
                    setSelectedHostel(hostel);
                    toggleDropdown();
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {hostel}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredData.map((product) => (
          <Product key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
