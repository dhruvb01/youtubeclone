import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchslice",
  initialState: {
    cache:{}
  },
  reducers: {
    add: (state, action) => {
        console.log("in dispathc")
        console.log(action.payload)
      state.cache = {
        ...action.payload,
        ...state.cache
      };
      console.log(state.cache)
    },
    remove: (state, action) => {
      state.cache = {};
    },
  },
});
export const { add, remove } = searchSlice.actions;
export default searchSlice.reducer;
