import { createSlice } from "@reduxjs/toolkit";
const apiUrl = import.meta.env.VITE_API_URL;
// Create the slice for backendUrl
const backendUrlSlice = createSlice({
  name: "backendUrl",
  initialState:apiUrl,
  reducers: {}
});


// Export the reducer to be used in the store
export default backendUrlSlice.reducer;
