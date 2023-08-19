let selection = ["rock", "paper", "scissors"];

// Capitalize - Helper function
function capitalize(str) {
  return str[0].toUpperCase() + str.substr(1);
}

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  return selection[randomNum];
}

console.log(getComputerChoice());
console.log(capitalize("test"));
console.log(capitalize(getComputerChoice()));
