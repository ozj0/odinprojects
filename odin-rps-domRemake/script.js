const btns = document.querySelectorAll('button');
const scoreboard = document.getElementById('scoreboard');
const results = document.getElementById('results');

let pS = 0;
let cS = 0;

function r() {
    return Math.floor(Math.random() * 3);
}

function gc() {
    switch (r()){
        case 0:
            return 'rock';
        break;
        case 1:
            return 'paper';
        break;
        case 2:
            return 'scissors';
        break;
    }
}

function g(x,y) {
    if ((x === 'rock' && y === 'scissors') ||
        (x === 'paper' && y === 'rock') ||
        (x === 'scissors' && y === 'paper')) return 'p';
    if ((y === 'rock' && x === 'scissors') ||
        (y === 'paper' && x === 'rock') ||
        (y === 'scissors' && x === 'paper')) return 'c';
    else return 'tie';
}

function c(w) {
    let f = w.toString().toUpperCase().charAt(0);
    let r = w.toString().slice(1);
    return f + r;
}

function uS() {
    const b1 = document.getElementById('b1');
        b1.textContent = `${pS}`
    const b2 = document.getElementById('b2');
        b2.textContent = `${pS}`
    const r1 = document.getElementById('r1');
        r1.textContent = `${cS}`
    const r2 = document.getElementById('r2');
        r2.textContent = `${cS}`
}

function rsG() {
    if (pS > 4) {
        results.textContent = '';
        const div = document.createElement('div');
        div.innerHTML = `<span class="blue">Player</span> Wins!`;
        const div2 = document.createElement('div');
        div2.innerHTML = `Final Score: <span class="blue">5<span> - <span class="red">${cS}<span>`;
        results.appendChild(div);
        results.appendChild(div2);        
        pS = 0;
        cS = 0;
    }
    if (cS > 4) {
        results.textContent = '';
        const div = document.createElement('div');
        div.innerHTML = `<span class="red">Computer</span> Wins!`;
        const div2 = document.createElement('div');
        div2.innerHTML = `Final Score: <span class="red">5<span> - <span class="blue">${pS}<span>`;
        results.appendChild(div);
        results.appendChild(div2);        
        pS = 0;
        cS = 0;
    }
}
btns.forEach((button) => {
    button.addEventListener('click', (e) => {
        let pC = e.target.value;
        let cC = gc();
        results.textContent = ''
        if (g(pC,cC) === 'p') {
            pS++;
            results.textContent = '';
            const div = document.createElement('div');
            div.textContent = `Player won that round!`
            const div2 = document.createElement('div');
            div2.innerHTML = `<span class="blue">Player</span> Move: ${c(pC)}`;
            const div3 = document.createElement('div');
            div3.innerHTML = `<span class="red">Computer</span> Move: ${c(cC)}`;
            results.appendChild(div);
            results.appendChild(div2);
            results.appendChild(div3);
        }
        if (g(pC,cC) === 'c') {
            cS++;
            results.textContent = '';
            const div = document.createElement('div');
            div.textContent = `Computer won that round!`
            const div2 = document.createElement('div');
            div2.innerHTML = `<span class="blue">Player</span> Move: ${c(pC)}`;
            const div3 = document.createElement('div');
            div3.innerHTML = `<span class="red">Computer</span> Move: ${c(cC)}`;
            results.appendChild(div);
            results.appendChild(div2);
            results.appendChild(div3);
        }
        if (g(pC,cC) === 'tie') {
            results.textContent = '';
            const div = document.createElement('div');
            div.textContent = `It was a tie!`
            const div2 = document.createElement('div');
            div2.innerHTML = `<span class="blue">Player</span> Move: ${c(pC)}`;
            const div3 = document.createElement('div');
            div3.innerHTML = `<span class="red">Computer</span> Move: ${c(cC)}`;
            results.appendChild(div);
            results.appendChild(div2);
            results.appendChild(div3);
        }
        uS();
        rsG();
    });
})