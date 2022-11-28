// prompt USER to type ROCK,PAPER,SCISSORS
// store response in a variable
// create function to make response uppercase
// if USER response is not equal to ROCK,PAPER,SCISSORS
//      prompt "Incorrect response, please type Rock, Paper, or Scissors"
// if USER response is equal to ROCK,PAPER,SCISSORS
//      assign playerChoice variable 
// create randomNum() function to get a random number 0-2
// create getCpuChoice() function, which uses randomNum(), to get 
// the computer's choice. 0 = ROCK, and so on.
// store the result from getCpuChoice() in computerChoice
// create game() function 
//      switch statement for game logic and different outcome



// declare the choice functions globally, then use them in the game function. 
// assign the variables in the function ?

function randomNum() {
    return Math.floor(Math.random()* 3);
}
function getCpuChoice() {
    switch(randomNum()) {
        case 0:
            return 'ROCK';
        break;
        case 1:
            return 'PAPER';
        break;
        case 2:
            return 'SCISSORS';
    }
}
function getPlrChoice() {
    let response = prompt('Please choose rock, paper, or scissors').toUpperCase();
    if (response === 'ROCK' || response === 'PAPER' || response === 'SCISSORS') {   
        return response;
    } else {
        getPlrChoice();
    }
}

function game() {
    let playerChoice = x;
    let computerChoice = getCpuChoice();
        if (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') {}



}