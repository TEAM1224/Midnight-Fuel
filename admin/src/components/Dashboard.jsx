import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSeller, getUser } from "../store/admin/controlSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const [totalSellers, setTotalSellers] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [newRequests, setNewRequests] = useState(0);
  const [totalActiveSellers, setTotalActiveSellers] = useState(0);
  const [totalActiveUsers, setTotalActiveUsers] = useState(0);
  const [sellerList, setSellerList] = useState([])
  const [userList, setUserList] = useState([])

  useEffect(() => {
    const getData = () => {
      dispatch(getUser())
        .then((data) => {
          if (data?.payload?.success) {
            setTotalUsers(data.payload.data.length);
            setUserList(data.payload.data)
          }
        })
        .catch((error) => {
          console.log(error);
        });

      dispatch(getSeller())
        .then((data) => {
          if (data?.payload?.success) {
            // console.log(data.payload.data[0].varified);
            const verifiedSeller = data.payload.data.filter((seller) => seller.varified == true)
            const notVarifiedSeller = data.payload.data.filter((seller) => seller.varified == false)

            setTotalSellers(verifiedSeller.length);
            setNewRequests(notVarifiedSeller.length);

            setSellerList(verifiedSeller);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getData();
  }, dispatch);

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
