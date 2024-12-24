import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function SellerDashboard() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        {/* Image Upload */}
        <div className="mb-6">
          {image ? (
            <img
              src={image}
              alt="Uploaded"
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
          ) : (
            <div className="w-32 h-32 bg-gray-600 rounded-full mx-auto flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-4 text-sm text-gray-300 cursor-pointer file:bg-gray-700 file:text-white file:rounded-full file:px-4 file:py-2 file:border-none hover:file:bg-gray-600"
          />
        </div>

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
            to="/logout"
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
