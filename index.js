let playerScore = 0
let computerScore = 0


//Function for computer selection. 
function getComputerChoice (){
    let choice = ['rock', 'paper', 'scissors']
    let selection = choice[Math.floor(Math.random()*choice.length)];
    alert ('The computer chose: ' + selection);
    return selection;
}

//function to find out winner of the round

function playRound(playerSelection, computerSelection){ if (playerSelection === computerSelection){
    return 'It\'s a draw!'
} else if ( playerSelection === 'rock' & computerSelection === 'scissors') {
    return 'You win! Rock beats scissors'
} else if ( playerSelection === 'rock' & computerSelection === 'paper') {
    return 'You lose! Paper beats rock'
} else if (playerSelection === 'paper' & computerSelection === 'rock') {
    return 'You win! Paper beats rock'
} else if ( playerSelection === 'paper' & computerSelection === 'scissors' ) {
    return 'You lose! Scissors beats Paper'
} else if ( playerSelection === 'scissors' & computerSelection === 'paper') {
    return 'You win! Scissors beats Paper'
} else if ( playerSelection === 'scissors' & computerSelection === 'rock') {
    return 'You lose! Rock beats Scissors'
}
}

//function for player input
function getPlayerChoice(){
   let playerChoice = prompt ('Please enter either Rock, Paper or Scissors', '');
   choiceLower = playerChoice.toLowerCase();
   alert ('You chose ' + choiceLower);
   return choiceLower
}

let playerSelection = getPlayerChoice()
let computerSelection = getComputerChoice()


console.log(playRound(playerSelection, computerSelection))

//function for keeping score of winners

function game() {
    for (let i=0; i<5; i++) {
        
    playerSelection = getPlayerChoice()
    computerSelection = getComputerChoice()
    
    console.log(playRound(playerSelection, computerSelection))

    }
} game()

