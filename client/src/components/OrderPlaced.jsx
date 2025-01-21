import React, { useState } from 'react';

function OrderPlaced() {
  // State to manage form data
  const [fullName, setFullName] = useState('');
  const [uid, setUid] = useState('');
  const [roomNo, setRoomNo] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  
  const totalAmount = 100; // Static total amount for example

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleUidChange = (e) => setUid(e.target.value);
  const handleRoomNoChange = (e) => setRoomNo(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handlePaymentModeChange = (e) => setPaymentMode(e.target.value);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Order Placed</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section - Address Form */}
        <div className="space-y-6">
          <h2 className="text-2xl font-medium mb-4">Enter Address Details</h2>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name:</label>
            <input
              type="text"
              value={fullName}
              onChange={handleFullNameChange}
              placeholder="Enter your full name"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* UID */}
          <div>
            <label className="block text-sm font-medium text-gray-700">UID:</label>
            <input
              type="text"
              value={uid}
              onChange={handleUidChange}
              placeholder="Enter your UID"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Address */}
          {/* Room Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Room Number:</label>
            <input
              type="text"
              value={roomNo}
              onChange={handleRoomNoChange}
              placeholder="Enter room number"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Payment Mode */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Payment Mode:</label>
            <select
              value={paymentMode}
              onChange={handlePaymentModeChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="cod">Cash on Delivery (COD)</option>
            </select>
          </div>
        </div>

        {/* Right Section - Total Amount & Order Button */}
        <div className="bg-gray-50 p-6 rounded-md shadow-md space-y-6">
          <h2 className="text-xl font-medium">Total Amount</h2>
          <p className="text-3xl font-semibold text-green-600">${totalAmount}</p>

          {/* Order Placed Button */}
          <button
            onClick={() => alert('Order Placed!')}
            className="w-full py-3 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600"
          >
            Order Placed
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderPlaced;
