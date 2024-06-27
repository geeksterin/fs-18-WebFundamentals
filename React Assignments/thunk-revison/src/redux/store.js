import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./slices/movieSlice";

export const movieStore = configureStore({
  reducer: movieSlice,
});
