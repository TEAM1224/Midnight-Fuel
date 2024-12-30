import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItemCount, setCartItemCount] = useState(3); // State to manage cart item count
  
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
    else setIsLoggedIn(false);

    // Check the cart from localStorage (if applicable)
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("Cart Data:", cart); // Debugging line to check cart data
    setCartItemCount(cart.length);
  }, [localStorage.getItem("token")]);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); // Update the state to reflect the logged-out status
    navigate("/login"); // Redirect to login page
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to the search page with the query string
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const handleCartClick = () => {
    navigate("/cart"); // Navigate to cart page when clicked
  };

  return (
    <header className="bg-slate-800 text-white shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6 gap-4">
        {/* Logo Section */}
        <NavLink to="/">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">MidNIGHT-FUEL</h2>
        </NavLink>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-grow md:max-w-[500px] mx-6 w-full">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full px-4 py-2 text-black rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-white-500 to-white-700 hover:from-white-600 hover:to-white-800 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              🔍 Search
            </button>
          </div>
        </form>

        {/* Dashboard, Cart, and Logout Buttons */}
        <div className="flex space-x-4">
          <button className="px-5 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold shadow-md transition duration-300">
            <NavLink to="/becomeSeller">Become Seller</NavLink>
          </button>

          {/* Cart Button */}
          <button
            onClick={handleCartClick}
            className="flex items-center space-x-2 px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-md transition duration-300 relative"
          >
            <span>🛒 Cart</span>
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-3 py-1 z-50 transform translate-x-1/2 -translate-y-1/2">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Logout or Login Button */}
          <button className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow-md transition duration-300">
            {isLoggedIn ? (
              <NavLink onClick={logout} className="text-sm text-gray-300 hover:text-white px-3">
                Logout
              </NavLink>
            ) : (
              <NavLink to="/login" className="text-sm text-gray-300 hover:text-white px-3">
                Login
              </NavLink>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
