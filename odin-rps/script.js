/*  declare playerScore, cpuScore variables globally
    create randomNum() function to get random number 0-2
    using randomNum() result, create getCpuChoice() function
        switch case: 0-2, 0='ROCK' and so on.
    create getPlrChoice() function
        assign variable = prompt asking for rock,paper,scissors [.toUpperCase]
            if user types rock,paper,scissors
                return variable
            if user types something other than rock,paper,scissors
                getPlrChoice()
    create playRound() function
        declare playerChoice = getPlrChoice(), cpuChoice = getCpuChoice()
        if (player winning scenarios)
            ++playerScore
            alert(player wins, player choice:, cpu choice:, total score)
        if (cpu winning scenarios)
            ++cpuScore
            alert(cpu wins, player choice:, cpu choice:, total score)
        else 
            alert(round tie, total score)
            return
    declare game() function        
            while (playerScore < 5 && cpuScore < 5)
            playRound()
        if (playerScore === 5)
            alert(congratulations, you win. refresh page to play again)
        if (cpuScore === 5)
            alert(cpu wins, better luck next time. refresh page to play again)
*/          
let playerScore = 0;
let cpuScore = 0;
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
function playRound() {
    let playerChoice = getPlrChoice();
    let cpuChoice = getCpuChoice()
    if ((playerChoice === 'ROCK' && cpuChoice === 'SCISSORS') ||
        (playerChoice === 'PAPER' && cpuChoice === 'ROCK') ||
        (playerChoice === 'SCISSORS' && cpuChoice === 'PAPER')) {
            ++playerScore;
            alert(`PLAYER WINS. \nPLAYER CHOICE: ${playerChoice} \nCPU CHOICE: ${cpuChoice} \nSCORE: ${playerScore} - ${cpuScore}`)
    }
    else if ((cpuChoice === 'ROCK' && playerChoice === 'SCISSORS') ||
        (cpuChoice === 'PAPER' && playerChoice === 'ROCK') ||
        (cpuChoice === 'SCISSORS' && playerChoice === 'PAPER')) {
            ++cpuScore;
            alert(`CPU WINS. \nPLAYER CHOICE: ${playerChoice} \nCPU CHOICE: ${cpuChoice} \nSCORE: ${playerScore} - ${cpuScore}`)

    }
    else {
        alert(`ROUND TIE \nSCORE: ${playerScore} - ${cpuScore}`)
        return;
    }
}
function game() {
    while (playerScore < 5 && cpuScore < 5) {
        playRound();
    }
    if (playerScore === 5) {
        alert('Congratulations! You won! \nRefresh the page to play again.');   
    } else if (cpuScore === 5) {
        alert('CPU Wins. Better luck next time.\nRefresh the page to play again.');
    }
}
game();
