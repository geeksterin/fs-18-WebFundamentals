var board = ['-', '-', '-' , '-' ,'-' , '-', '-', '-','-']
var player = "X"
var gameOver = false

function displayBoard()
{
    let main = document.getElementsByClassName("board")[0]
    main.innerHTML = ""
    board.forEach((item,index) => {
        let btn = document.createElement("button")
        btn.classList.add("cell")
        btn.innerText = item;
        btn.addEventListener("click", () => playTurn(index))
        main.append(btn)
    })



    document.getElementById("turn").innerHTML = `Current Turn : ${player}`

}

function playTurn(index)
{
    // Check if cell is not empty then reutrn immediatly
    if(board[index] != '-')
    {
        alert("Don't Cheat")
        return;
    }
    // chceck if game is over
    if(gameOver == true)
    {
        alert("Game is over")
        return;
    }
    // change the board
    board[index] = player

    // Flip the player
    if(player=="X") player = "O"
    else player = "X"

    // show the updated array on screen
    displayBoard();

    // check if the anyone wins the game
    let x = checkWins("X")
    let o = checkWins("O")
    
    if(x)
    {
        gameOver = true
        alert("X Wins the Game")
    }
    else if (o)
    {
        gameOver = true
        alert("O Wins the Game")
    }
    else if(board.includes("-") == false){
        gameOver = true
        alert("Game is Draw")
    }
}

function checkWins(p)
{
    // first row
    if(board[0] == p && board[1] == p && board[2] == p) return true;
    // second row
    if(board[3] == p && board[4] == p && board[5] == p) return true;
    // third row
    if(board[6] == p && board[7] == p && board[8] == p) return true;
    // first col
    if(board[0] == p && board[3] == p && board[6] == p) return true;
    // second col
    if(board[1] == p && board[4] == p && board[7] == p) return true;
    // third third
    if(board[2] == p && board[5] == p && board[8] == p) return true;
    // first diagonal
    if(board[0] == p && board[4] == p && board[8] == p) return true;
    // second diagonal
    if(board[2] == p && board[4] == p && board[6] == p) return true;

    return false;
 
}

function reset()
{
    board = ['-', '-', '-' , '-' ,'-' , '-', '-', '-','-']
    player = "X"
    gameOver = false
    displayBoard();
}

displayBoard();
document.getElementById("reset").addEventListener("click",reset)