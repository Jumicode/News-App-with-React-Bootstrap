import { createSlice } from "@reduxjs/toolkit";

const initialState={

newsMain:[],

}

export const NewsSlice = createSlice ({
    name:'news',
    initialState,
    reducers:{
        setNewsMain:(state,actions) =>{
    state.newsMain = actions.payload
        }
    }

})


export const {setNewsMain} = NewsSlice.actions;

export default NewsSlice.reducer;