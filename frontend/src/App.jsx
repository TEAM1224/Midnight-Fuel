import React from 'react'
import SellerDashboard from './components/SellerDashboard';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AddProduct from './components/AddProduct';
import Listitems from './components/Listitems';
import Orders from './components/Orders';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<SellerDashboard />}>
    <Route path="/addproduct" element={<AddProduct />} />
    <Route path="/listitems" element={<Listitems />} />
    <Route path="/orders" element={<Orders/>} />
    {/* Main Routes */}
    {/*<Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home/:id" element={<ViewBlog/>} />

      {/* Dashboard and Nested Routes }
      <Route path="/dashboard" element={<Dashboad />}>
        <Route path="createblog" element={<UploadPost />} />
      </Route> */}
    </Route>
  )
);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App