import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      const { recommend, newDisney, original, trending } = action.payload;
      state.recommend = recommend;
      state.newDisney = newDisney;
      state.original = original;
      state.trending = trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectedRecommend = (state) => state.movie.recommend;
export const selectedNewDisney = (state) => state.movie.newDisney;
export const selectedOriginal = (state) => state.movie.original;
export const selectedTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
