import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      {/* Main Routes */}
      <Route path="/" element={<Home />} />
      

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
