const playerSelection = 'Rock';
const computerSelection = getComputerChoice();


function getComputerChoice() {
    const array = ['Rock', 'Paper', 'Scissors'];
    return array[Math.floor(Math.random() * array.length)];
}

