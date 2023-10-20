function player(mark) {
  let _mark = mark;
  let turn = false;
  return {
    mark,
    turn,
  };
}

const gameBoard = (function () {
  let board = new Array(9);
  const cellElements = document.querySelectorAll(".cell");
  cellElements.forEach((cell) => {
    cell.addEventListener("click", handleClick);
  });
  function switchTurn(player) {
    if (player.mark === "x") {
    }
  }

  function getTurn() {}

  function setMark(player, mark) {}
})();

const displayController = (function () {})();
