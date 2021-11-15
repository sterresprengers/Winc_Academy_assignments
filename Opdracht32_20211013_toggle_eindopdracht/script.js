

const getNavMenu = document.querySelector(".btn-hover-nav");
const getSideBar = document.querySelector(".nav-sidebar");
const getSideBarList = document.querySelector(".color-menu");
const getSideBarListColors = document.querySelector(".nav sidebar a")

// All feedback: https://vimeo.com/632047656/dd3899b194
let navBarStatus = false; // Feedback: this can be removed, because this variable is not used

// Feedback: these two functions can be written as arrow functions
const navMenuMouseOver = function () {
        getSideBarList.style.visibility = "visible";
        getSideBar.style.width = "150px";
}

const navMenuMouseOut = function () {
    getSideBarList.style.visibility = "hidden";
    getSideBar.style.width = "50px";
}
getNavMenu.addEventListener('mouseover', navMenuMouseOver);



const body = document.body;
const redButton = document.querySelector(".btn-red");
const yellowButton = document.querySelector(".btn-yellow");
const blueButton = document.querySelector(".btn-blue");
const greenButton = document.querySelector(".btn-green");

let redButtonActive = true; // Feedback: this can be removed, because this variable is not used


// Feedback: using toggle makes it buggy, because colors are stagged (zie herkansing van opdracht)
// Needs add and remove class instead of toggle (see remarks below)

const toggleRed = function () {
    body.classList.toggle("red-background"); // Remove this
    // use console.log(body.classList[0]) to check what classList is added (and can be removed)
    // remove class => body.classList[0];
    // add class => yellow-background to
    navMenuMouseOut();
}
redButton.addEventListener("click", toggleRed);


const toggleYellow = function () {
    body.classList.toggle("yellow-background");
    navMenuMouseOut();
}
yellowButton.addEventListener("click", toggleYellow);


const toggleBlue = function () {
    body.classList.toggle("blue-background");
    navMenuMouseOut();
}
blueButton.addEventListener("click", toggleBlue);

const toggleGreen = function () {
    body.classList.toggle("green-background");
    navMenuMouseOut();
}
greenButton.addEventListener("click", toggleGreen);
