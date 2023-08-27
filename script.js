const buttons = document.querySelectorAll("button");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const winnerDisplay = document.querySelector(".winner");

// Getting random selection
// Retrieve corresponding choice from selection array
let selection = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  return selection[randomNum];
}

// Helper function - Display score
function displayScore(playerScore, computerScore) {
  playerScoreDisplay.textContent = `${playerScore}`;
  computerScoreDisplay.textContent = `${computerScore}`;
  console.log(`Score: ${playerScore} - ${computerScore}`);
}

// Helper function - determine winner
function determineWinner(player, computer) {
  winnerDisplay.textContent =
    player > computer ? "Player wins!" : "Player Loses :(";
}

// Scores
let counter = 1;
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  // Game logic
  if (playerScore < 5 && computerScore < 5) {
    counter++;
    if (playerSelection === "rock") {
      if (computerSelection === "scissors") {
        playerScore++;
        displayScore(playerScore, computerScore);
        return `You win! Rock beats Scissors`;
      } else if (computerSelection === "paper") {
        computerScore++;
        displayScore(playerScore, computerScore);
        return `You lose! Paper beats Rock`;
      } else return `You both chose rock, It's a tie`;
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        playerScore++;
        displayScore(playerScore, computerScore);
        return `You win! Paper beats Rock`;
      } else if (computerSelection == "scissors") {
        computerScore++;
        displayScore(playerScore, computerScore);
        return `You lose! Scissors beat Paper`;
      } else return `You both chose rock, It's a tie`;
    } else {
      if (computerSelection === "rock") {
        computerScore++;
        displayScore(playerScore, computerScore);
        return `You lose! Rock beats Scissors`;
      } else if (computerSelection === "paper") {
        playerScore++;
        displayScore(playerScore, computerScore);
        return `You win! Scissors beat Paper`;
      } else return `You both chose rock, It's a tie`;
    }
  } else determineWinner(playerScore, computerScore);
}

// Listening on buttons and assigning corresponding
// playerSelection which is the button's ID

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    playerSelection = e.target.id;
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  });
});
