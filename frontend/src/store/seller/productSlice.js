import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading : false,
    productsList: [],
}

export const fetchProduct = createAsyncThunk('/get-product',
    async()=>{
        const response = await axios.get(`http://localhost:4000/api/seller/get-product`)

        return response?.data;
    }

)

export const addProduct = createAsyncThunk('/add',
    async({formData, sellerId})=>{
        const response = await axios.post(`http://localhost:4000/api/seller/${sellerId}`, formData)

        return response?.data;
    }

)

export const editProduct = createAsyncThunk('/edit-product',
    async({formData, productId})=>{
        const response = await axios.put(`http://localhost:4000/api/seller/${productId}`, formData)

        return response?.data;
    }

)

export const deleteProduct = createAsyncThunk('/delete-product',
    async(productId)=>{
        const response = await axios.delete(`http://localhost:4000/api/seller/delete/${productId}`)

        return response?.data;
    }
)


const sellerProductSlice = createSlice({
    name: "sellerProductSlice",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchProduct.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(fetchProduct.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.productsList = action.payload.data;
        })
        .addCase(fetchProduct.rejected, (state)=>{
            state.isLoading = false;
            state.productsList = [];
        })
        .addCase(addProduct.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(addProduct.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.productsList = action.payload.data;
        })
        .addCase(addProduct.rejected, (state)=>{
            state.isLoading = false;
            state.productsList = [];
        })

    }
})


export default sellerProductSlice.reducer;