
//Function for computer selection. 
function getComputerChoice (){
    let choice = ['Rock', 'Paper', 'Scissors']
    let selection = choice[Math.floor(Math.random()*choice.length)];
    alert ('The computer chose: ' + selection);
    return selection;
}

//function to find out winner of the round

function playRound(playerSelection, computerSelection){ if (playerSelection === computerSelection){
    return 'It\'s a draw!'
} else if ( playerSelection === 'Rock' & computerSelection === 'Scissors') {
    return 'You win! Rock beats scissors'
} else if ( playerSelection === 'Rock' & computerSelection === 'Paper') {
    return 'You lose! Paper beats rock'
} else if (playerSelection === 'Paper' & computerSelection === 'Rock') {
    return 'You win! Paper beats rock'
} else if ( playerSelection === 'Paper' & computerSelection === 'Scissors' ) {
    return 'You lose! Scissors beats Paper'
} else if ( playerSelection === 'Scissors' & computerSelection === 'Paper') {
    return 'You win! Scissors beats Paper'
} else if ( playerSelection === 'Scissors' & computerSelection === 'Rock') {
    return 'You lose! Rock beats Scissors'
}
}

const playerSelection = 'Rock'
const computerSelection = getComputerChoice()

console.log(playRound(playerSelection, computerSelection))

//function for player input
