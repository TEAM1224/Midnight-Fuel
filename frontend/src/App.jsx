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
import Auth from './components/Auth';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Independent Auth Route */}
      <Route path="/auth" element={<Auth />} />

      {/* Seller Dashboard and other nested routes */}
      <Route path="/" element={<SellerDashboard />}>
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="listitems" element={<Listitems />} />
        <Route path="orders" element={<Orders />} />
      </Route>
    </>
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