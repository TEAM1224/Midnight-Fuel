import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    user: null,
};

export const loginUser = createAsyncThunk('/login',
    async(formData)=>{
        const response = await axios.post('http://localhost:4000/api/admin/login', formData)
        return response?.data;
    }
)

export const logoutUser = createAsyncThunk('/logout', 
    async()=>{
        const response = await axios.get('http://localhost:4000/api/admin/logout')
        return response?.data;
    }
)


const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state)=>{
            state.isAuthenticated = false;
            state.isLoading = true;
            state.user = null;
        })
        .addCase(loginUser.fulfilled, (state, action)=>{
            state.isAuthenticated = true;
            state.isLoading = false;
            state.user = action.payload.data;
        })
        .addCase(loginUser.rejected, (state)=>{
            state.isAuthenticated = false;
            state.isLoading = false;
            state.user = null;
        })
    }

})

export default authSlice.reducer;