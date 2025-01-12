import React from "react";

const Dashboard = () => {
  // Example Data
  const totalSellers = 120;
  const totalUsers = 1500;
  const newRequests = 35;
  const totalActiveSellers = 100;
  const totalActiveUsers = 1400;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      {/* Container for the stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Sellers */}
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold text-gray-700">Total Sellers</h2>
          <p className="text-3xl font-semibold text-indigo-600">
            {totalSellers}
          </p>
        </div>

        {/* Total Users */}
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold text-gray-700">Total Users</h2>
          <p className="text-3xl font-semibold text-indigo-600">{totalUsers}</p>
        </div>

        {/* Total Active Sellers */}
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold text-gray-700">Active Sellers</h2>
          <p className="text-3xl font-semibold text-green-600">
            {totalActiveSellers}
          </p>
        </div>

        {/* Total Active Users */}
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold text-gray-700">Active Users</h2>
          <p className="text-3xl font-semibold text-green-600">
            {totalActiveUsers}
          </p>
        </div>

        {/* New Requests for Becoming Seller */}
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-bold text-gray-700">New Requests</h2>
          <p className="text-3xl font-semibold text-red-600">{newRequests}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
