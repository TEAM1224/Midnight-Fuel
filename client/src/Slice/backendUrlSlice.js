import { createSlice } from "@reduxjs/toolkit";

// Create the slice for backendUrl
const backendUrlSlice = createSlice({
  name: "backendUrl",
  initialState:"http://localhost:4000",
  reducers: {}
});


// Export the reducer to be used in the store
export default backendUrlSlice.reducer;
