function player(mark) {
  let _mark = mark;
  let turn = false;
  return {
    mark,
    turn,
  };
}

const gameBoard = (function () {
  let _board = new Array(9);
  const cellElements = document.querySelectorAll(".cell");
  cellElements.forEach((cell) => {
    cell.addEventListener("click", handleClick);
  });
})();

const gameController = (() => {
  function switchTurn() {
    const board = document.getElementById("board");
    if (board.classList.contains("x")) {
      board.classList.remove("x");
      board.classList.add("o");
    } else if (board.classList.contains("o")) {
      board.classList.remove("o");
      board.classList.add("x");
    }
  }

  return {
    getHumanPlayer,
    getAiPlayer,
    checkForWin,
    checkForDraw,
    switchTurn,
    playerStep,
    endGame,
    restart,
  };
})();

const displayController = () => {};
