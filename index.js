
function getComputerChoice() {
    const array = ['Rock', 'Paper', 'Scissors'];
    return array[Math.floor(Math.random() * array.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return 'It\'s a tie!';
  } else if ((computerSelection == 'rock' && playerSelection.toLowerCase() == 'scissors') || 
            (computerSelection == 'scissors' && playerSelection.toLowerCase() == 'paper') ||
            (computerSelection == 'paper' && playerSelection.toLowerCase() == 'rock'))
        return `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
    else ((playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') ||
            (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') ||
            (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock'))
        return `You win! ${playerSelection.toLowerCase()} beats ${computerSelection}`;   
}
   
  const playerSelection = 'PaPer';
  const computerSelection = getComputerChoice().toLowerCase();
  console.log(playRound(playerSelection, computerSelection));
  console.log(computerSelection);


