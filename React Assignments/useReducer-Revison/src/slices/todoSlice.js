import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ title: "ABCD", description: "ABCVDF" }],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        title: action.payload.title,
        description: action.payload.description,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos.splice(action.payload.index, 1);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
