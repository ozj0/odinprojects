function operate(operator, n, n2) {
    if (operator === '+') return Number(add(n,n2));
    if (operator === '-') return sub(n,n2);
    if (operator === '*') return mul(n,n2);
    if (operator === '/') return div(n,n2);
}
function add(n,n2) {
    return Number(n) + Number(n2);
}
function sub(n,n2) {
    return n - n2;
}
function mul(n,n2) {
    return n * n2;
}
function div(n,n2) {
    return n / n2;
}

let numArr = [];

const numBtns = document.querySelectorAll('.num');

numBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        numArr.push(e.target.value);
        display.textContent = numArr.join('');
    })
})

const negativeBtn = document.getElementById('negative');

negativeBtn.addEventListener('click', () => {
    if (numArr[0] === '-') {
        numArr.shift();
    } else {
        numArr.unshift('-');
    }
    display.textContent = numArr.join('');
})

let n = 0;
let runningVal = 0;
let bool = false;
let operator = '';

const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (bool === false) {
            n = createNum();
            runningVal = n;
            bool = true;
            operator = e.target.value;
            display.textContent = runningVal;
        }
        else if (bool === true) {
            n = createNum();
            runningVal = operate(operator, runningVal, n);
            display.textContent = runningVal
            operator = e.target.value;
        }
    })
})

function createNum(){
    let num = numArr.join('');
    numArr.length = 0;
    return num;
}

const equalsBtn = document.getElementById('equals');

equalsBtn.addEventListener('click', () => {
    n = createNum();
    runningVal = operate(operator, runningVal, n);
    display.textContent = runningVal
})

const clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click', () => {
    n = 0;
    runningVal = 0;
    bool = false;
    operator = '';
    numArr.length = 0;
    display.textContent = 0;
})

const percentBtn = document.getElementById('percentage');

// if % is hit before any other operator
// next num value is pushed into numArr 
// with result of first % . n

percentBtn.addEventListener('click', () => {
    if (n === 0 && runningVal === 0) {
        n = (createNum()/100);
        runningVal = n;
        numArr.push(n);
        display.textContent = n;
    } else {
        runningVal /= 100;
        display.textContent = runningVal;
    }
})
