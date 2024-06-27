import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../slices/todoSlice";

export const todoStore = configureStore({
  reducer: todoSlice,
});
