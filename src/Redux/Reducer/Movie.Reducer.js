import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "movie" : [],
    "treanding" : [],
    "popular" : [],
    "topRated"  : []

}
export const movie1stPageReducer = createSlice({
    name  : "movie1stPage",
    initialState,
    reducers : {
        setMovie : (state , action) =>{
            state.movie = action.payload;
        },
        setTreanding : (state , action)=>{
            state.treanding = action.payload;
        },
        setwhatsPopular : (state , action)=>{
            state.popular = action.payload;
        },
        setToprated : (state , action) => {
            state.topRated = action.payload;
        }
    } 
})

export const {setMovie , setTreanding , setToprated , setwhatsPopular} = movie1stPageReducer.actions;
export const Movie1stPage = movie1stPageReducer.reducer