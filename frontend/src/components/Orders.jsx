import React, { useState } from 'react';

function Orders() {
  const [orderList, setOrderList] = useState([]);
  return (
    <div className="p-4 mt-20">
      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      <div
        className="overflow-y-auto max-h-60 sm:max-h-72 md:max-h-96" // Responsive max-height
      >
        <ul className="space-y-4">
          {orderList.length > 0 ? (
            orderList.map((order, index) => (
              <li
                key={index}
                className="p-4 border border-gray-200 rounded-lg shadow-sm"
              >
                <div className="font-medium">Order #{order.id}</div>
                <div className="text-sm text-gray-600">Status: {order.status}</div>
                <div className="text-sm text-gray-600">Total: ${order.total}</div>
              </li>
            ))
          ) : (
            <li className="text-gray-600">No orders available.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Orders;
