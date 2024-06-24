// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [board, setBoard] = useState([
//     " ",
//     " ",
//     " ",
//     " ",
//     " ",
//     " ",
//     " ",
//     " ",
//     " ",
//   ]);
//   const [player, setPlayer] = useState("X");

//   const [winner, setWinner] = useState(null);

//   const handleClick = (index) => {
//     if (board[index] == "X" || board[index] == "O") {
//       alert("Don't cheat");
//       return;
//     }

//     if (winner != null) {
//       alert("Game is over!");
//       return;
//     }

//     let temp = [...board];
//     temp[index] = player;
//     setBoard(temp);

//     // flip
//     if (player == "X") setPlayer("O");
//     else setPlayer("X");
//   };

//   const checkWins = (p) => {
//     if (board[0] == p && board[1] == p && board[2] == p) return true;
//     else if (board[3] == p && board[4] == p && board[5] == p) return true;
//     else if (board[6] == p && board[7] == p && board[8] == p) return true;
//     else if (board[0] == p && board[3] == p && board[6] == p) return true;
//     else if (board[1] == p && board[4] == p && board[7] == p) return true;
//     else if (board[2] == p && board[5] == p && board[8] == p) return true;
//     else if (board[0] == p && board[4] == p && board[8] == p) return true;
//     else if (board[2] == p && board[4] == p && board[6] == p) return true;
//     else return false;
//   };

//   useEffect(() => {
//     let x = checkWins("X");
//     let y = checkWins("O");
//     if (x == true) {
//       setWinner("X");
//     } else if (y == true) {
//       setWinner("O");
//     }
//   }, [board]);

//   return (
//     <div>
//       <h1>Tic Tac Toe</h1>
//       <p>Turn : {player}</p>
//       {winner != null ? <p>Winner is : {winner}</p> : null}
//       <div className="board">
//         {board.map((item, index) => (
//           <button onClick={() => handleClick(index)} className="cell">
//             {item}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
