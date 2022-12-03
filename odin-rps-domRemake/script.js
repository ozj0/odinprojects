
function random() {
    return Math.floor(Math.random() * 3);
}
function getCpuChoice() {
    switch (random()) {
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
const btn = document.querySelectorAll('.gameBtn');
let playerScore = 0;
let cpuScore = 0;
btn.forEach((button) => {
    button.addEventListener('click', (e) => {
        let plrChoice = e.target.value;
        let cpuChoice = getCpuChoice();
        document.querySelector('.plrScore').textContent = playerScore; 
        document.querySelector('.cpuScore').textContent = cpuScore;
        document.querySelector('.plrScore2').textContent = playerScore;
        document.querySelector('.cpuScore2').textContent = cpuScore;
        if ((plrChoice === 'ROCK' && cpuChoice === 'SCISSORS') ||
        (plrChoice === 'PAPER' && cpuChoice === 'ROCK') ||
        (plrChoice === 'SCISSORS' && cpuChoice === 'PAPER')) {
            playerScore++;
        }
        else if  ((cpuChoice === 'ROCK' && plrChoice === 'SCISSORS') ||
        (cpuChoice === 'PAPER' && plrChoice === 'ROCK') ||
        (cpuChoice === 'SCISSORS' && plrChoice === 'PAPER')) {
            cpuScore++;
        } 
        else {
            return;
        }
        if (playerScore>4) {
            alert(`you win ${playerScore} - ${cpuScore} \n
            click any button to play again`);
            playerScore = 0;
            cpuScore = 0;
        }
        if (cpuScore >4) {
            alert(`you lose${playerScore} - ${cpuScore} \n
            click any button to play again;`);
            playerScore = 0;
            cpuScore=0;
        }
    }
)});
