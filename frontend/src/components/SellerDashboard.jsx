import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function SellerDashboard() {
  const navigate = useNavigate();

  const handleLogout = () =>{
    localStorage.removeItem('token')
    navigate('/auth');
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        

        {/* Navigation */}
        <div className="flex flex-col space-y-4">
          <NavLink
            to="addproduct"
            className={({ isActive }) =>
              `px-4 py-2 rounded text-left font-semibold ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white transition"
              }`
            }
          >
            Add Product
          </NavLink>
          <NavLink
            to="listitems"
            className={({ isActive }) =>
              `px-4 py-2 rounded text-left font-semibold ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white transition"
              }`
            }
          >
            List Items
          </NavLink>
          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `px-4 py-2 rounded text-left font-semibold ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white transition"
              }`
            }
          >
            Orders
          </NavLink>
          <NavLink
            onClick={handleLogout}
            className={({ isActive }) =>
              `px-4 py-2 rounded text-left font-semibold ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white transition"
              }`
            }
          >
            Logout
          </NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 bg-gray-100 overflow-hidden">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </React.Suspense>
      </main>
    </div>
  );
}

export default SellerDashboard;
