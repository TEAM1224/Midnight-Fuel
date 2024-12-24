import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./seller/authSlice";
import sellerProductSlice from './seller/productSlice'

const store = configureStore({
    reducer :{
        auth : authSlice,
        sellerProduct : sellerProductSlice,
    }
})

export default store;