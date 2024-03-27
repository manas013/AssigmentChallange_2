import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchproduct=createAsyncThunk("fetchproduct",async()=>{
    const data=await fetch('https://jsonplaceholder.typicode.com/posts')
    return data.json()
})
const productSlice=createSlice({
    name:"product",
    initialState:{
        isLoading:false,
        data:[],
        error:false
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchproduct.pending,(state,action)=>{
            state.isLoading=true
        });
        builder.addCase(fetchproduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload
        })
        builder.addCase(fetchproduct.rejected,(state,action)=>[
            state.error=true
        ])
    }
})

export default productSlice.reducer;