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

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue = cPassword.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 characters.')
    } else {
        setSuccess(password);
    }

    if(cPasswordValue === '') {
        setError(cPassword, 'Please confirm your password');
    } else if (cPasswordValue !== passwordValue) {
        setError(cPassword, "Passwords don't match");
    } else {
        setSuccess(cPassword);
    }
};


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    element.classList.remove('border-purple-500', 'ring', 'ring-red-500', 'border-green-500', 'ring-green-500');
    element.classList.add('border-red-500', 'ring-red-500');

    // // Set new styles directly
    // element.style.borderColor = 'red';
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    element.classList.remove('border-purple-500', 'ring', 'ring-red-500', 'border-green-500', 'ring-green-500');
    element.classList.add('border-green-500', 'ring-green-500');

    // // Set new styles directly
    // element.style.borderColor = 'green';
};

function isValidEmail(e) {
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
}
