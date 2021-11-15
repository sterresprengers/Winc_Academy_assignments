// Deel 1 //////////////////////////////////////

const bigFiveButtons = document.querySelectorAll(".big-five-button");
const spottedList = document.querySelector("#spotted-animals-list");

bigFiveButtons.forEach(button => {
    button.addEventListener("click", e => {
        // console.log("A button has been clicked")
        const spottedAnimal = e.target.textContent
        // console.log("The clicked button is:", spottedAnimal)
        newSpottedListItem(spottedAnimal);
    })
});


const newSpottedListItem = function(animal) {
    const spottedLiTag = document.createElement("li")
    spottedLiTag.innerHTML = animal; 
    // console.log("Newly created list item:", spottedLiTag);
    spottedList.appendChild(spottedLiTag);
};

// Deel 2 //////////////////////////////////////

const removeFirstButton = document.querySelector("#remove-first-item-button"); 

removeFirstButton.addEventListener("click", () => {
    // console.log("The remove first button was clicked");
    const spottedList = document.querySelector("#spotted-animals-list");
    // console.log("The parent of first item is:", spottedList);
    const firstItem = document.querySelector("#spotted-animals-list li")
    // console.log("The first item:", firstItem)
    const removed = spottedList.removeChild(firstItem);
    // console.log("first item is removed", removed);
});


// Deel 3 //////////////////////////////////////
const removeAllButton = document.querySelector("#remove-all-button");

removeAllButton.addEventListener("click", () => {
    // console.log("The remove all button was clicked");
    const spottedList = document.querySelector("#spotted-animals-list");
    // console.log("The parent of first item is:", spottedList);

    // Solution 1: empty the HTML
    // spottedList.innerHTML = "";

    // Solution 2: forEach loop
    spottedList.querySelectorAll('*').forEach(n => n.remove());
});