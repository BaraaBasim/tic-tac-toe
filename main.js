const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
let playerTurn = "x";
reset();
function clickHandler(e) {
  e.target.classList.add(playerTurn);
  if (checkWin(playerTurn)) {
    console.log(playerTurn, " wins!");
    reset();
  }
  switchTurn();
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

function checkFinish() {
  cells.forEach((cell) => {
    if (!cell.classList.contains("x") && !cell.classList.contains("o")) {
      return false;
    }
  });
  return true;
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
}
