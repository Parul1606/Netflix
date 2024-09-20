import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popularMovie: null,
        topRatedMovie: null,
        upcomingMovies: null,
    },
    reducers:{
        //actions
        getNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        getPopularMovies:(state, action)=>{
            state.popularMovie = action.payload;
        },
        getTopRatedMovies:(state, action)=>{
            state.topRatedMovie = action.payload;
        },
        getUpcomingMovies:(state, action)=>{
            state.upcomingMovies = action.payload;
        }
    }
});

export const {getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies} = movieSlice.actions;

export default movieSlice.reducer;