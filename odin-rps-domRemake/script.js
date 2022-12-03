const playerScore = document.querySelectorAll('playerScore');
const cpuScore = document.querySelectorAll('cpuScore');
const btn = document.querySelectorAll('button');

btn.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target.value); 
    });
});
