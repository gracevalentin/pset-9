let board;
let turn;
let win;
var pointsX = 0;
var pointsY = 0;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const squares = Array.from(document.querySelectorAll("#board div"));
const message = document.querySelector("h3");   // grab the subheader

window.onload = init;
document.getElementById("board").onclick = takeTurn;
document.getElementById("reset-button").onclick = init;

function render() {
  board.forEach(function(mark, index) {
    squares[index].textContent = mark;
  });

  message.textContent =
    win === "T" ? "It's a tie!" : win ? `${win} wins!` : `Turn: ${turn}`;
}

function init() {
  board = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];

  turn = "X";
  win = null;

  render();
}

function takeTurn(e) {
  if (!win) {
    let index = squares.findIndex(function(square) {
      return square === e.target;
    });

    if (board[index] === "") {
      board[index] = turn;
      turn = turn === "X" ? "O" : "X";
      win = getWinner();

      render();
    }
  }
}

function getWinner() {
  let winner = null;

  winningConditions.forEach(function(condition, index) {
    if (board[condition[0]] &&
        board[condition[0]] === board[condition[1]] &&
        board[condition[1]] === board[condition[2]]) {
      winner = board[condition[0]];
      if(winner === "X"){
        pointsX++;
        document.getElementById("scoreboard1").innerHTML = pointsX;
    }
      if(winner === "O"){
        pointsY++;
        document.getElementById("scoreboard2").innerHTML = pointsY;
      }
    }
  });

  return winner ? winner : board.includes("") ? null : "T";
}
