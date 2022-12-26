const modal = document.querySelector('.modal');
const openBtn = document.querySelector('.open');
const exitBtns = document.querySelectorAll('.exit');
const table = document.querySelector('table');
const form = document.querySelector('form');

openBtn.addEventListener('click', () => {
    modal.classList.add('active');
})

exitBtns.forEach((button) => {
    button.addEventListener('click', () => {
        modal.classList.remove('active');
    })
})

function Book(author,title,pages,read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBook(book) {
    const tr = document.createElement('tr');
    for (const prop in book) {
        const td = document.createElement('td');
        td.textContent =`${book[prop]}`;
        tr.appendChild(td);
    }
    const td = document.createElement('td');
    td.innerHTML = `<button id="remove">&times</button>`;
    tr.appendChild(td);
    table.appendChild(tr);
}

form.addEventListener('submit', () => {
    event.preventDefault();
    const author = document.querySelector('#author');
    const title = document.querySelector('#title');
    const pages = document.querySelector('#pages');
    const read = document.querySelector('#isRead');
    const newBook = new Book(author.value,title.value,pages.value,read.value);
    author.value = '';
    title.value = '';
    pages.value = '';
    read.value = '';
    addBook(newBook); 
});

document.addEventListener("click", function(e){
    const target = e.target.closest("#remove");
    if(target){
        target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
    }
});