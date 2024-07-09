import { createSlice } from "@reduxjs/toolkit";

const mainSlice=createSlice({
    name:"main",
    initialState:{
        toggle:true
    },
    reducers:{
        change:(state)=>{
state.toggle=!state.toggle
        }
    }
})

export const {change}=mainSlice.actions
export default mainSlice.reducer