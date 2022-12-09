import { createSlice } from "@reduxjs/toolkit";



export const NewsSlice = createSlice ({
    name:'news',
    initialState:{
    newsMain:[],
    newsSports:[],
    newsEntertainment:[],
    newsTechnology:[],
    newsSearch:[],
    },

    reducers:{

   setNewsMain:(state,actions) =>{
    state.newsMain = actions.payload;
   },
   setNewsSports:(state,actions) =>{
    state.newsSports = actions.payload;
   },
   setNewsEntertainment:(state,actions) => {
    state.newsEntertainment = actions.payload;
   },
   setNewsTechnology:(state,actions) => {
    state.newsTechnology = actions.payload;
   },
   setNewsSearch:(state,actions) =>{
     state.newsSearch = actions.payload;
}


    }

})


export const {setNewsMain,setNewsSports,setNewsEntertainment,setNewsTechnology,setNewsSearch} = NewsSlice.actions;

export default NewsSlice.reducer;