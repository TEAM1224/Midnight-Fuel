import { createSlice } from '@reduxjs/toolkit';
import { products } from '../components/products.js'; // Import your static product data

const productSlice = createSlice({
  name: 'products',
  initialState: products, // Static product data
  reducers: {}, // No actions, as this is read-only
});

export default productSlice.reducer; // Export only the reducer
