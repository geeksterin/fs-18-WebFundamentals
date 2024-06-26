import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
  const response = await fetch(
    "http://www.omdbapi.com/?s=transformer&apikey=1b4ecd2"
  );
  return response.json();
});

const movieSlice = createSlice({
  name: "Movie Name",
  initialState: {
    movies: [],
    loading: false,
    error: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.error = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false;
      state.movies = action.payload.Search;
    });
    builder.addCase(fetchMovies.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export default movieSlice.reducer;
