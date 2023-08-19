let selection = ["rock", "paper", "scissors"];

// Helper function - Capitalize
function capitalize(str) {
  return str[0].toUpperCase() + str.substr(1);
}
// Helper function - Display score
function displayScore(playerScore, computerScore) {
  console.log(`Score: ${playerScore} - ${computerScore}`);
}

// Helper function - determine winner

function determineWinner(player, computer) {
  return player > computer ? "Player wins!" : "Player Loses :(";
}

// Getting random selection
// Retrieve corresponding choice from selection array
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  return selection[randomNum];
}

// Scores
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  // Game logic
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerScore++;
      return `You win! Rock beats Scissors`;
    } else if (computerSelection === "paper") {
      computerScore++;
      return `You lose! Paper beats Rock`;
    } else return `You both chose rock, It's a tie`;
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return `You win! Paper beats Rock`;
    } else if (computerSelection == "scissors") {
      computerScore++;
      return `You lose! Scissors beat Paper`;
    } else return `You both chose rock, It's a tie`;
  } else {
    if (computerSelection === "rock") {
      computerScore++;
      return `You lose! Rock beats Scissors`;
    } else if (computerSelection === "paper") {
      playerScore++;
      return `You win! Scissors beat Paper`;
    } else return `You both chose rock, It's a tie`;
  }
}

// Play 5 rounds and determine winner
function game() {
  while (playerScore < 5 && computerScore < 5) {
    let counter = 1;
    // Get selections
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Rock, Paper or Scissors ?").toLowerCase();
    console.log(`-----------\nRound ${counter}\n-----------`);
    console.log(playRound(playerSelection, computerSelection));
    displayScore(playerScore, computerScore);
    counter++;
  }
  console.log(determineWinner(playerScore, computerScore));
}

game();
