const button = document.querySelector('#click');

function clickFunction(event) {
    event.preventDefault();
    console.log('click');
    button.value = Number(button.value) + 1;
}

button.addEventListener('click', clickFunction);