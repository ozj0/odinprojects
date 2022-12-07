const input = document.getElementById('input');
const output = document.getElementById('output');
const white = document.getElementById('white');
const mono = document.getElementById('monochrome');
const rainbow = document.getElementById('rainbow');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
const grid = document.getElementById('grid');
const boxes = document.querySelectorAll('.active');
const boxArr = Array.from(boxes)
createDivs(32);
input.addEventListener('input', (e) => {
    let input = e.target.value;
    output.textContent = `${input}x${input}`;
    clearDivs(grid);
    createDivs(input);
})
function createDivs(inputVal) {
    for (i = 0; i < inputVal; i++) {
        const vert = document.createElement('div');
        vert.classList.add('vert');
        grid.appendChild(vert);
    }
    const vertDivs = document.querySelectorAll('.vert');
    const vertArr = Array.from(vertDivs);
    for (const vert of vertArr) {
        for (i = 0; i < inputVal; i++) {
            const hori = document.createElement('div');
            hori.classList.add('box');
            hori.addEventListener('mouseover', () => {
                hori.classList.add('active');
            })
            vert.appendChild(hori);    
    }
    }    
}
function clearDivs(parent) {
    while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
    }   
}