import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Slice/ProductSlice.js'
import cartReducer from '../Slice/CartItemSlice.js'
export const store = configureStore({
  reducer: {
    products: productReducer, // Register the products reducer
    cart:cartReducer
  },
});
