
const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASS_NAME = 'hidden';
const USER_NAME_KEY = 'name';

function submitLoginForm(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS_NAME);
    const name = loginInput.value;
    localStorage.setItem(USER_NAME_KEY, name);
    return greetingName(name);
};

function greetingName(name) {
    greeting.innerText = `Hello ${name}!`;
    greeting.classList.remove(HIDDEN_CLASS_NAME);
};

const savedName = localStorage.getItem(USER_NAME_KEY);

if (savedName === null) {
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
    loginForm.addEventListener('submit', submitLoginForm);
} else {
    greetingName(savedName);
};