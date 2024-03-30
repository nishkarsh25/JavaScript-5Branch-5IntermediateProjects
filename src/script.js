const form = document.querySelector('.form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cPassword = document.querySelector('#confirm-password');
const submit = document.querySelector("#btn");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});