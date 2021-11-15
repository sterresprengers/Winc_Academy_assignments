const getNavMenu = document.querySelector(".btn-hover-nav");
const getSideBar = document.querySelector(".nav-sidebar");
const getSideBarList = document.querySelector(".color-menu");
const wrapper = document.querySelectorAll(".wrapper")


const navMenuMouseOver = function () {
        getSideBarList.style.visibility = "visible";
        getSideBar.style.width = "150px";
}

const navMenuMouseOut = function () {
    getSideBarList.style.visibility = "hidden";
    getSideBar.style.width = "50px";
}

Array.from(wrapper).map(wrap => wrap.addEventListener('mouseover', navMenuMouseOver));
Array.from(wrapper).map(wrap => wrap.addEventListener('mouseout', navMenuMouseOut));


const body = document.body;
const redButton = document.querySelector(".btn-red");
const yellowButton = document.querySelector(".btn-yellow");
const blueButton = document.querySelector(".btn-blue");
const greenButton = document.querySelector(".btn-green");

const toggleRed = () => {
    body.classList.remove(body.classList[0]);
    body.classList.add("red-background");
    getSideBar.classList.remove("nav-sidebar-open");
}
redButton.addEventListener("click", toggleRed);

const toggleYellow = () => {
    body.classList.remove(body.classList[0]);
    body.classList.add("yellow-background");
    getSideBar.classList.remove("nav-sidebar-open");
}
yellowButton.addEventListener("click", toggleYellow);

const toggleBlue = () => {
    body.classList.remove(body.classList[0]);
    body.classList.add("blue-background");
    getSideBar.classList.remove("nav-sidebar-open");
}
blueButton.addEventListener("click", toggleBlue);

const toggleGreen = () => {
    body.classList.remove(body.classList[0]);
    body.classList.add("green-background");
    getSideBar.classList.remove("nav-sidebar-open");
}
greenButton.addEventListener("click", toggleGreen);


// let navMenuMouseOver = () => {
//     getSideBar.classList.toggle("nav-sidebar-open");
//     getSideBarList.classList.toggle("color-menu-visible"); // --> This won't work - why not?! (also with opacity and block/none it won't work)
// }
// getNavMenu.addEventListener('click', navMenuMouseOver);