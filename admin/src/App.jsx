import React from "react";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Seller from "./components/Seller";

const App = () => {
  return (
    <Routes>
      {/* Parent Route with Outlet */}
      <Route path="/admin" element={<AdminDashboard />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="seller" element={<Seller />} />
        {/* <Route path="settings" element={<Settings />} /> */}
        {/* <Route path="reports" element={<Reports />} /> */}
        {/* <Route path="logout" element={<Logout />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
