//Function to allow user to select
function playerSelection (){
prompt ('Please choose either rock, paper or scissors')
}

playerSelection()


//Function for computer selection. 
function getComputerChoice (){
    let choice = ['Rock', 'Paper', 'Scissors']
    let selection = choice[Math.floor(Math.random()*choice.length)];
    alert ('The computer chose: ' + selection);
}

getComputerChoice()