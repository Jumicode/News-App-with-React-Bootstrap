import { configureStore } from "@reduxjs/toolkit";
import NewsReducer from "../features/News/NewsSlice";


export const store = configureStore({
    reducer:{
        name:NewsReducer,
    }
})