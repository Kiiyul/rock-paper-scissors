//Function for computer selection. 
function getComputerChoice (){
    let choice = ['rock', 'paper', 'scissors']
    let selection = choice[Math.floor(Math.random()*choice.length)];
    alert ('The computer chose: ' + selection);
    return selection;
}

let playerScore = 0
let computerScore = 0

//function to find out winner of the round

function playRound(playerSelection, computerSelection){ if (playerSelection === computerSelection){
    return 'It\'s a draw!'
} else if ( playerSelection === 'rock' & computerSelection === 'scissors') { playerScore++;
    return 'You win! Rock beats scissors'
} else if ( playerSelection === 'rock' & computerSelection === 'paper') { computerScore++;
    return 'You lose! Paper beats rock'
} else if (playerSelection === 'paper' & computerSelection === 'rock') { playerScore++;
    return 'You win! Paper beats rock'
} else if ( playerSelection === 'paper' & computerSelection === 'scissors' ) { computerScore++
    return 'You lose! Scissors beats Paper'
} else if ( playerSelection === 'scissors' & computerSelection === 'paper') { playerScore++
    return 'You win! Scissors beats Paper'
} else if ( playerSelection === 'scissors' & computerSelection === 'rock') {computerScore++
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
    for (let i=0; i<5; i+0) {
    playerSelection = getPlayerChoice()
    computerSelection = getComputerChoice()
    let result = playRound(playerSelection, computerSelection)
    console.log(result)
    if (result.includes('win!')) {
        i++;
        if (i===5) {
            alert(`The final score is ${playerScore} to ${computerScore}`);
        }
    } else if (result.includes('lose!')) {
        i++;
        if (i===5) {
            alert(`The final score is ${playerScore} to ${computerScore}`)
        }
    } else if (result.includes('draw!')) {
        i+0
    }


    }
} game()

