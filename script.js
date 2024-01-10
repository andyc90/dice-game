document.addEventListener("DOMContentLoaded", () => {
  let scores = [0, 0];
  let currentScore = 0;
  let currentPlayer = 0;
  const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

  const rollBtn = document.getElementById("roll-btn");
  const holdBtn = document.getElementById("hold-btn");
  const restartBtn = document.getElementById("restart-btn");
  const diceFace = document.getElementById("dice-face");
  const playerElements = [
    document.getElementById("player1"),
    document.getElementById("player2"),
  ];
  const currentScoreElements = [
    document.getElementById("current-score-1"),
    document.getElementById("current-score-2"),
  ];
  const totalScoreElements = [
    document.getElementById("total-score-1"),
    document.getElementById("total-score-2"),
  ];

  function updateScores() {
    currentScoreElements[currentPlayer].textContent = currentScore;
    totalScoreElements[0].textContent = scores[0];
    totalScoreElements[1].textContent = scores[1];
  }

  function updateActivePlayer() {
    playerElements[0].classList.toggle("active", currentPlayer === 0);
    playerElements[1].classList.toggle("active", currentPlayer === 1);
  }

  function switchPlayer() {
    currentScore = 0;
    currentPlayer = 1 - currentPlayer;
    updateScores();
    updateActivePlayer();
  }

  function resetGame() {
    scores = [0, 0];
    currentScore = 0;
    currentPlayer = 0;
    currentScoreElements[0].textContent = 0;
    currentScoreElements[1].textContent = 0;
    totalScoreElements[0].textContent = 0;
    totalScoreElements[1].textContent = 0;
    diceFace.textContent = "";

    playerElements[0].classList.remove("active");
    playerElements[1].classList.remove("active");
    updateActivePlayer();
  }

  rollBtn.addEventListener("click", () => {
    let roll = Math.floor(Math.random() * 6) + 1;
    diceFace.textContent = diceFaces[roll - 1];

    if (roll === 1) {
      switchPlayer();
    } else {
      currentScore += roll;
      updateScores();
    }
  });

  holdBtn.addEventListener("click", () => {
    scores[currentPlayer] += currentScore;
    if (scores[currentPlayer] >= 20) {
      alert(`Player ${currentPlayer + 1} wins!`);
      resetGame();
    } else {
      switchPlayer();
    }
  });

  restartBtn.addEventListener("click", resetGame);

  updateActivePlayer();
});
