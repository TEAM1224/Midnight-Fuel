import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading : false,
    isAuthenticated: false,
    user: null
}

export const registerUser = createAsyncThunk('/register/user',
    async(formData)=>{
        const response = await axios.post('http://localhost:4000/api/seller/signup',formData);

        return response.data;
    }
)
export const loginUser = createAsyncThunk('/login/seller',
    async(formData)=>{
        const response = await axios.post('http://localhost:4000/api/seller/login',formData);

        return response.data;
    }
)

export const logoutUser = createAsyncThunk('/logout/seller',
    async()=>{
        const response = await axios.post('http://localhost:4000/api/seller/auth/logout')

        return response.data;
    }
)


const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload.data;
        })
        .addCase(registerUser.rejected, (state)=>{
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false;
        })
        .addCase(loginUser.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload.data;
        })
        .addCase(loginUser.rejected, (state)=>{
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false;
        })
        .addCase(logoutUser.fulfilled, (state)=>{
            state.isLoading = false;
            state.user = null;
            state.isAuthenticated = false;
        })
    }
})


export default authSlice.reducer;