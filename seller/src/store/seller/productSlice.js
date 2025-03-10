import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoading : false,
    productsList: [],
}

export const fetchProduct = createAsyncThunk('/get-product',
    async()=>{
        const response = await axios.get(`http://localhost:4000/api/seller/get-products`,
        {withCredentials: true})

        return response?.data;
    }

)

export const addProduct = createAsyncThunk('/add',
    async(formData)=>{
        const response = await axios.post('http://localhost:4000/api/seller/add', formData,
        {withCredentials: true})

        return response?.data;
    }

)

export const editProduct = createAsyncThunk('/edit-product',
    async({formData, productId})=>{
        const response = await axios.put(`http://localhost:4000/api/seller/${productId}`, formData,
        {withCredentials: true})

        return response?.data;
    }

)

export const updateProduct = createAsyncThunk('/update-product',
    async({productId, price, quantity})=>{
        const response = await axios.put(`http://localhost:4000/api/seller/edit/${productId}`,{price, quantity})

        return response?.data;
    }
)

export const deleteProduct = createAsyncThunk('/delete-product',
    async(productId)=>{
        const response = await axios.delete(`http://localhost:4000/api/seller/delete/${productId}`)
        return response?.data;
    }
)

export const fetchOrders = createAsyncThunk('/fectch All orders',
    async()=>{
        const response = await axios.get(`http://localhost:4000/api/seller/get-orders`,
        {withCredentials: true})
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
        .addCase(fetchOrders.rejected,(state)=>{
            state.isLoading = false;
            state.ordersList = [];
        })
        .addCase(fetchOrders.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.ordersList = action.payload.data;
        })
    }
})


export default sellerProductSlice.reducer;