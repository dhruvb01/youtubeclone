import { configureStore } from "@reduxjs/toolkit";
import main from './Mainslice'
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
const appStore=configureStore({
    reducer:{
        mainreducer:main,
        searchReducer:searchSlice,
        chatReducer:chatSlice

    }
})
export default appStore