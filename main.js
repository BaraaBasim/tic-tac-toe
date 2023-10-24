const cells = document.querySelectorAll(".cell");
let playerTurn = "x";
cells.forEach((cell) => {
  cell.addEventListener("click", clickHandler, { once: true });
});

function clickHandler(e) {
  e.target.classList.add(playerTurn);
  switchTurn();
}

function switchTurn() {
  if (playerTurn === "x") {
    playerTurn = "o";
  } else if (playerTurn === "o") {
    playerTurn = "x";
  }
}

function checkWin() {}
