import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    sellers:[],
    users:[]
}

export const getUser = createAsyncThunk('/getUser', 
    async()=>{
        const response = await axios.post('http://localhost:4000/api/admin/get-users')
        return response.data;
    }
)

export const getSeller = createAsyncThunk('/getseller',
    async()=>{
        const response = await axios.post('http://localhost:4000/api/admin/get-sellers')
        return response.data;
    }
)

const controlSlice = createSlice({
    name: 'controlSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getUser.pending, (state)=>{
            state.users = [];
        })
        .addCase(getUser.fulfilled, (state, action)=>{
            state.users = action.payload.data;
        })
        .addCase(getUser.rejected, (state)=>{
            state.users = [];
        })
        .addCase(getSeller.pending, (state)=>{
            state.sellers = [];
        })
        .addCase(getSeller.fulfilled, (state, action)=>{
            state.sellers = action.payload.data;
        })
        .addCase(getSeller.rejected, (state)=>{
            state.sellers = [];
        })
    }
})


export default controlSlice.reducer