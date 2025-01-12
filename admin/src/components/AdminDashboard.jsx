import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For small devices

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="flex h-screen font-sans">
      {/* Hamburger Menu for Small Devices */}
      <button
        className="bg-gray-800 text-white p-2 fixed top-4 left-4 z-50 sm:hidden"
        onClick={toggleMobileMenu}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } sm:block bg-gray-800 text-white w-64 h-full fixed sm:relative z-40`}
      >
        <ul className="mt-4 space-y-2">
          <li 
          onClick={() => navigate('/admin/dashboard')}
          className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded">
            Dashboard
          </li>
          <li 
          onClick={() => navigate('/admin/seller')}
          className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded">
            Seller
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded">
            <a href="/settings">Settings</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded">
            <a href="/reports">Reports</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer rounded">
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 mt-10 sm:mt-0">
        {/* Outlet for rendering child routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
