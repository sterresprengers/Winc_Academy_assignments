// have 5 playround with for loop //////////////////////////////////

for (let i = 1; i < 6; i++) {
    console.log("what is round " + i);
    if (i < 5) {
        console.log("This was round " + i + ". On to round " + (i+1));
    }
    else if (i === 5) {
        console.log("This was the last round. Game over!");
    }
}




// get random number between 0 and 25 //////////////////////////////////

// const getRandomNumber = function (max) {
//     return Math.floor(Math.random()*max);
// }
// console.log(getRandomNumber(26)); 

// console.log(Math.random(26));





// get random number between selected marges //////////////////////////////////

const getRandomNumber2 = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    console.log("The random number is " + randomNumber);
    return randomNumber; 
  }

// const selectedCeilNumber = 0; 
// const selectedFloorNumber = 100;
// console.log(getRandomNumber2(selectedCeilNumber, selectedFloorNumber));





// Have the player select a number //////////////////////////////////

const playerSelectsNumber = function () {
    const askForNumber = prompt("Choose a number between" + min + " and" + max + " .");
    const selectedNumber = parseInt(askForNumber);
    document.write("The number you choose was " + covertedToNumber);
    return selectedNumber;
}







// compare selected (by player) and picked (by computer) number //////////////////////////////////

const compareNumbers = function (number1, number2) {
    if (number1 === number2) {
        alert("Congratualations! The computer also picked " + number2 + ". This means you won!");
        alert("Want to try again?");
        playTheGame();
    } else {
        alert("Too bad. The random selected number by the computer is " + number2 + ".");
        return;
    }
}

const selectedNumber = 8; 
const randomNumber = 7;

compareNumbers(selectedNumber, randomNumber);



// Let player decide the range to play on //////////////////////////////////

const setGameRange = function () {
    const selectedCeilNumber = prompt("Decide the minimum number");
    const min = parseInt(selectedCeilNumber);
    // console.log("The selected minimum number is " + min + ". ");
    document.write("Okay " + playerName + ". The selected minimum is " + min + ". ");
    const selectedFloorNumber = prompt("Now decide the maximum number");
    const max = parseInt(selectedFloorNumber);
    // console.log("The selected minimum number is " + max + ".");
    document.write("The selected minimun is " + max + ". Let's play");
    console.log(min, max);
    return (min, max);
}

// splitted 

const setGameRangeMin = function () {
    const selectedCeilNumber = prompt("Decide the minimum number: ");
    const minNumber = parseInt(selectedCeilNumber);
    return minNumber;
}

const setGameRangeMax = function () {
    const selectedFloorNumber = prompt("Now decide the maximum number: ");
    const maxNumber = parseInt(selectedFloorNumber);
    return maxNumber;
}



// FirstRound - still needed? 

const firstRound = function () {
    const askFirstNumber = prompt("Choose a number between" + min + " and" + max + " ."); 
    const firstNumber = parseInt(askFirstNumber);
    document.write("The first number you have choosen is " + firstNumber);
    return firstNumber;
}


// Welcome, get name 

const welcomePlayer = function () {
    const playerName = prompt("Welcome! What's your name?", "Tell me!");
    confirm("Hey " + playerName + ". Let's play a game!"); // returns a boolean
    return true
}

