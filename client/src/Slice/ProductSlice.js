import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [], // Store the list of products
    loading: false, // Track loading state
    error: null, // Track error state
  },
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action) {
      state.loading = false;
      state.items = action.payload; // Update items with fetched products
    },
    fetchProductsFailure(state, action) {
      state.loading = false;
      state.error = action.payload; // Store the error
    },
  },
});

export const { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } = productSlice.actions;

// Function to fetch products
export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsStart()); // Set loading to true
  try {
    const response = await axios.get('http://localhost:4000/api/seller/get-allproducts');
    //console.log(response);
    dispatch(fetchProductsSuccess(response.data)); // Dispatch success with data
  } catch (error) {
    console.log(error);
    
    dispatch(fetchProductsFailure(error.response?.data || 'Failed to fetch products')); // Dispatch failure with error
  }
};

export default productSlice.reducer;
