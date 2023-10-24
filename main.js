const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const overlay = document.querySelector(".overlay");
const restartBtn = document.getElementById("restart");
const winningMsg = document.getElementById("winningMsg");
let playerTurn = "x";
restartBtn.addEventListener("click", reset);
reset();
function clickHandler(e) {
  e.target.classList.add(playerTurn);
  if (checkWin(playerTurn)) {
    overlay.classList.add("show");
    winningMsg.innerText = playerTurn.toUpperCase() + " Wins!";
  }
  switchTurn();
  if (checkDraw()) {
    overlay.classList.add("show");
    winningMsg.innerText = "Draw!";
  }
}

function switchTurn() {
  if (board.classList.contains("x")) {
    board.classList.remove("x");
    board.classList.add("o");
  } else if (board.classList.contains("o")) {
    board.classList.remove("o");
    board.classList.add("x");
  }
  if (playerTurn === "x") {
    playerTurn = "o";
  } else if (playerTurn === "o") {
    playerTurn = "x";
  }
}

function checkDraw() {
  return [...cells].every((cell) => {
    return cell.classList.contains("x") || cell.classList.contains("o");
  });
}

function checkWin(mark) {
  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cells[index].classList.contains(mark);
    });
  });
}

function reset() {
  cells.forEach((cell) => {
    cell.addEventListener("click", clickHandler, { once: true });
    cell.classList = "cell";
  });
  overlay.classList.remove("show");
  winningMsg.innerText = "";
}
