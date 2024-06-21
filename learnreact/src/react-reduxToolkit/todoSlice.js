import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "todoSlice",
  initialState: {
    inputValue: "",
    tasks: [],
  },
  reducers: {
    setInputValue: function (state, action) {
      state.inputValue = action.payload;
    },
    addTask: function (state, action) {
      state.tasks = [
        ...state.tasks,
        { id: Date.now(), text: state.inputValue },
      ];
      state.inputValue = "";
    },
    deleteTask: function (state, action) {
      state.tasks = state.tasks.filter((task) => {
        return task.id !== action.payload;
      });
    },
  },
});

export const { setInputValue, addTask, deleteTask } = slice.actions;
export const todoReducer = slice.reducer;
