import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  board: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
  player: "X",
  winner: null,
};

const todoSlice = createSlice({
  name: "todo slice",
  initialState: initialValues,
  reducers: {
    changeBoard: (state, action) => {
      state.board[action.payload.index] = state.player;
    },
    flipTurn: (state, action) => {
      if (state.player == "X") {
        state.player = "O";
      } else {
        state.player = "X";
      }
    },
    setWinner: (state, action) => {
      state.winner = action.payload.winner;
    },
  },
});

export default todoSlice.reducer;
export const { changeBoard, flipTurn, setWinner } = todoSlice.actions;
