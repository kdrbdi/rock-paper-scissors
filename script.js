let selection = ["rock", "paper", "scissors"];

// Capitalize - Helper function
function capitalize(str) {
  return str[0].toUpperCase() + str.substr(1);
}

// Getting random selection
// Retrieve corresponding choice from selection array
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  return selection[randomNum];
}

// Get selections
let computerSelection = getComputerChoice();
let playerSelection = prompt("Rock, Paper or Scissors ?").toLowerCase();

// Define game logic
function play(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") return `You win! Rock beats Scissors`;
    else if (computerSelection === "paper") return `You lose! Paper beats Rock`;
    else return `You both chose rock, It's a tie`;
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") return `You win! Paper beats Rock`;
    else if (computerSelection == "scissors")
      return `You lose! Scissors beat Paper`;
    else return `You both chose rock, It's a tie`;
  } else {
    if (computerSelection === "rock") return `You lose! Rock beats Scissors`;
    else if (computerSelection === "paper")
      return `You win! Scissors beat Paper`;
    else return `You both chose rock, It's a tie`;
  }
}

console.log(play(playerSelection, computerSelection));
