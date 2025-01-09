import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      {/* Main Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* Dashboard and Nested Routes */}
    </Route>
  )
);


function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
