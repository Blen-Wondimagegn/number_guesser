let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(max) {
  //   debugger;
  return Math.floor(Math.random() * max);
  //   return 1 + 1;
}

console.log(generateTarget(9));

function compareGuesses(humanScore, computerScore, currentRoundNumber) {
  //if else
  if (Math.abs(humanScore) == currentRoundNumber) {
    return true;
  } else if (Math.abs(computerScore) == currentRoundNumber) {
    return false;
  }
}
console.log(compareGuesses());
// function updateScore(winner){
//  if(winner === 'human' || winner === 'computer'){
//   compareGuesses()++
//  }
// }

function advanceRound() {
  currentRoundNumber += 1;
}
console.log(advanceRound());
