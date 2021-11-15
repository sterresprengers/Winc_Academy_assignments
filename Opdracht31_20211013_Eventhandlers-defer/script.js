const alertButton = document.getElementById('mybutton'); // ID selector
const changeColorButton = document.querySelector('.btn-changecolor'); //query selector
const body = document.querySelector('body'); // > can be even shorter with just: document.body




// Opdracht 1: Een click event vastmaken aan een button

const clickedAlert = function () {
    alert("Button clicked");
}
alertButton.addEventListener('click', clickedAlert);




// Opdracht 2: 

// const clickChangeBackground = function () {
//     body.classList.add("red-background");
// }
// changeColorButton.addEventListener('click', clickChangeBackground);




// Opdracht 3: 

const clickToggleBackground = function () {
    body.classList.toggle("red-background");
}
changeColorButton.addEventListener('click', clickToggleBackground);