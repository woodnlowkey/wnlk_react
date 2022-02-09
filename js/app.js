// hi?
alert('hi');
// variable?
// Always const, Sometimes let, Never var.
const a = 5;
const b = 2;
let myName = 'woodnlowkey'
// using Variable
console.log(a + b);
console.log('hello ' + myName);
// change Variable
myName = 'woojin';
console.log('your name is ' + myName);
// Type of Variables
const amIFat = false;
console.log(amIFat);
const iAmFat = null;
console.log(iAmFat);
let iAmNotFat;
console.log(iAmNotFat);
// array?
const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
// Get Item from Array
console.log(daysOfWeek[4]);
// Add one more day to the array
daysOfWeek.push('sun');
console.log(daysOfWeek);
// object?
const player = {
    name: 'woojin',
    age: 33,
    job: 'programmer',
    handsome: true,
};
// Get Item from Object
console.log(player.name);
// how to modify something 
player.handsome = false;
console.log(player.handsome);
player.age = player.age + 1;
console.log(player);
// how to add something
player.skill = ['python', 'js'];
console.log(player);
// function?
function whatIsYour(x) {
    console.log('I\'m \"' + player[x] + '\"')
};
whatIsYour('job');
// function in object
const dog = {
    name: 'donna',
    sex: 'female',
    breed: 'border collie',
    say: function(something) {
        console.log(something + ' too!')
    }
};
dog.say('love you');
// practice
const cal = {
    add: function(a, b) {
        console.log(a + b);
    },
    sub: function(a, b) {
        console.log(a - b);
    },
    div: function(a, b) {
        console.log(a / b);
    },
    mul: function(a, b) {
        console.log(a * b);
    },
    pow: function(a, b) {
        console.log(a ** b);
    }
};
cal.add(2,2);
cal.sub(3,2);
cal.div(6,2);
cal.mul(2,3);
cal.pow(2,3);
// conditions
// isNaN = is Not a Number? true or false
// <, <=, >, >=, ==, !=, ===, !== comparison operator
// && = and, || = or
function checkAge() {
    const age = Number(prompt('How old are you?'));
    if (isNaN(age)) {
        console.log('Please write a number')
        return checkAge();
    } else if (age > 0 && age < 18) {
        console.log('You are too young');
    } else if (age >= 18 && age <= 80) {
        console.log('You can drink');
    } else if (age > 80) {
        console.log('You can do whatever you want');
    } else {
        console.log('Please write a positive number')
        return checkAge();
    }
};
checkAge();
// modify HTML
document.title = 'Hello World!'
const title = document.getElementById('title');
title.innerText = 'I Got you!'
document.getElementsByClassName
// events
const title = document.querySelector('#title');
function handleTitleClick() {
    console.log('title was clicked!')
};
title.addEventListener('click', handleTitleClick);