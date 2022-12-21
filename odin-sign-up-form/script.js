const pwd = document.getElementById('pwd');
const pwd2 = document.getElementById('pwd2');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    let one = pwd.value;
    let two = pwd2.value;
    if (one !== two) {
        alert("Passwords didn't match!");
        event.preventDefault();
    }
})