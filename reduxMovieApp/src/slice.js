import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//redux-thunk: helps us create async action creators. Helps us write async logic with redux

//async operations do not go in slice's reducer

export const fetchTrendingMoviesByDay = createAsyncThunk(
  "fetchTrending",
  async () => {
    try {
      const result = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=" +
          import.meta.env.VITE_TMDB_API_KEY
      );
      return result.data.results;
    } catch (err) {
      return err;
    }
  }
);

export const fetchTrendingMoviesByWeek = createAsyncThunk(
  "fetchTrendingWeek",
  async () => {
    try {
      const result = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=" +
          import.meta.env.VITE_TMDB_API_KEY
      );
      return result.data.results;
    } catch (err) {
      return err;
    }
  }
);

const slice = createSlice({
  name: "moviesSlice",
  initialState: {
    trendingMoviesByDay: [],
    trendingMoviesByWeek: [],
    status: "idle",
    error: null,
  },
  reducers: {}, //these were sync actions
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingMoviesByDay.pending, (state, action) => {
        state.status = "Loading...";
      })
      .addCase(fetchTrendingMoviesByDay.fulfilled, (state, action) => {
        state.trendingMoviesByDay = action.payload;
      })
      .addCase(fetchTrendingMoviesByDay.rejected, (state, action) => {
        state.status = "There is an error";
        state.error = action.payload;
      })
      .addCase(fetchTrendingMoviesByWeek.pending, (state, action) => {
        state.status = "Loading...";
      })
      .addCase(fetchTrendingMoviesByWeek.fulfilled, (state, action) => {
        state.trendingMoviesByWeek = action.payload;
      })
      .addCase(fetchTrendingMoviesByWeek.rejected, (state, action) => {
        state.status = "There is an error";
        state.error = action.payload;
      });
  },
});

export const sliceReducer = slice.reducer;


