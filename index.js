//Function for computer selection. 
function getComputerChoice (){
    let choice = ['Rock', 'Paper', 'Scissors']
    let selection = choice[Math.floor(Math.random()*choice.length)];
    return selection;
}

let playerScore = 0
let computerScore = 0

//function to find out winner of the round

function playRound(playerSelection, computerSelection){ if (playerSelection === computerSelection){
    return 'It\'s a draw!'
} else if ( playerSelection === 'Rock' & computerSelection === 'Scissors') { playerScore++;
    return 'You win! Rock beats scissors'
} else if ( playerSelection === 'Rock' & computerSelection === 'Paper') { computerScore++;
    return 'You lose! Paper beats rock'
} else if (playerSelection === 'Paper' & computerSelection === 'Rock') { playerScore++;
    return 'You win! Paper beats rock'
} else if ( playerSelection === 'Paper' & computerSelection === 'Scissors' ) { computerScore++
    return 'You lose! Scissors beats Paper'
} else if ( playerSelection === 'Scissors' & computerSelection === 'Paper') { playerScore++
    return 'You win! Scissors beats Paper'
} else if ( playerSelection === 'Scissors' & computerSelection === 'Rock') {computerScore++
    return 'You lose! Rock beats Scissors'
}
}

function game(e) {
    const playerSelection = e.target.textContent;
    const computerSelection = getComputerChoice()
    console.log({ playerSelection, computerSelection});
    let result = playRound(playerSelection, computerSelection)

    console.log(playerScore, computerScore);

    para.textContent = result;
    results.appendChild(para);
    pScore.textContent = `Player score is: ${playerScore}`;
    cScore.textContent = `Computer score is: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        para.textContent = `The final score is ${playerScore} to ${computerScore}`;
        newGame.classList.add('newGame');
        newGame.textContent = 'New Game';
        gameResults.appendChild(newGame);
        newGame.addEventListener('click', resetScore);
        results.appendChild(para);
        newGame.style.display = 'block';
        rockButton.disabled = 'true';
        paperButton.disabled = 'true';
        scissorsButton.disabled = 'true';
    }

}

const newGame = document.createElement('button');
const para = document.createElement('p');

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    newGame.style.display = 'none';
    rockButton.disabled = !rockButton.disabled;
    paperButton.disabled = !paperButton.disabled;
    scissorsButton.disabled = !scissorsButton.disabled;
}

const container = document.querySelector('#container');

const score = document.createElement('div');
score.classList.add('score');
container.appendChild(score);

const pScore = document.createElement('p');
pScore.classList.add('pScore');
score.appendChild(pScore);

const cScore = document.createElement('p');
cScore.classList.add('cScore');
score.appendChild(cScore);

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('buttonContainer');
container.appendChild(buttonContainer);

const rockButton = document.createElement('button');
rockButton.classList.add('rockButton');
rockButton.textContent = 'Rock';
buttonContainer.appendChild(rockButton)
rockButton.addEventListener('click', game)

const paperButton = document.createElement('button');
paperButton.classList.add('paperButton');
paperButton.textContent = 'Paper';
buttonContainer.appendChild(paperButton);
paperButton.addEventListener('click', game)

const scissorsButton = document.createElement('button');
scissorsButton.classList.add('scissorsButton');
scissorsButton.textContent = 'Scissors';
buttonContainer.appendChild(scissorsButton);
scissorsButton.addEventListener('click', game)

const results = document.createElement('div');
results.classList.add('results');
container.appendChild(results);

const gameResults = document.createElement('div');
gameResults.classList.add('gameResults');
container.appendChild(gameResults);

