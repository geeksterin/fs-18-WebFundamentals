import { useEffect, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { changeBoard, flipTurn, setWinner } from "./slices/todoSlice";

function App() {
  const board = useSelector((state) => state.board);
  const player = useSelector((state) => state.player);
  const winner = useSelector((state) => state.winner);

  const dispatch = useDispatch();
  const handleClick = (index) => {
    if (board[index] == "X" || board[index] == "O") {
      alert("Don't cheat");
      return;
    }

    if (winner != null) {
      alert("Game is over!");
      return;
    }

    dispatch(
      changeBoard({
        index: index,
      })
    );

    dispatch(flipTurn({}));
  };

  const checkWins = (p) => {
    if (board[0] == p && board[1] == p && board[2] == p) return true;
    else if (board[3] == p && board[4] == p && board[5] == p) return true;
    else if (board[6] == p && board[7] == p && board[8] == p) return true;
    else if (board[0] == p && board[3] == p && board[6] == p) return true;
    else if (board[1] == p && board[4] == p && board[7] == p) return true;
    else if (board[2] == p && board[5] == p && board[8] == p) return true;
    else if (board[0] == p && board[4] == p && board[8] == p) return true;
    else if (board[2] == p && board[4] == p && board[6] == p) return true;
    else return false;
  };

  useEffect(() => {
    let x = checkWins("X");
    let y = checkWins("O");
    if (x == true) {
      dispatch(
        setWinner({
          winner: "X",
        })
      );
    } else if (y == true) {
      dispatch(
        setWinner({
          winner: "O",
        })
      );
    }
  }, [board]);

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <p>Turn : {player}</p>
      {winner != null ? <p>Winner is : {winner}</p> : null}
      <div className="board">
        {board.map((item, index) => (
          <button onClick={() => handleClick(index)} className="cell">
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
