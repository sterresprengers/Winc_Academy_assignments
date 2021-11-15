// get random number between selected marges //////////////////////////////////

const getRandomNumber2 = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber; 
}

// Have the player select a number //////////////////////////////////

const playerSelectsNumber = function (number1, number2) {
    const askForNumber = prompt("Choose a number between " + number1 + " and " + number2 + ".");
    const selectedNumber = parseInt(askForNumber);
    return selectedNumber;
}

// compare selected (by player) and picked (by computer) number //////////////////////////////////

const compareNumbers = function (number1, number2) {
    if (number1 === number2) {
        alert("Congratualations!!!!!!!!!!! The computer also picked " + number2 + ".This means you won!!!!!!");
        alert("Want to try again?");
        playTheGame();
    } else {
        alert("Too bad. The random selected number by the computer is " + number2 + ".");
    }
}

// Let player decide the range to play on //////////////////////////////////

const setGameRangeMin = function () {
    const selectedCeilNumber = prompt("If you can guess the same number as the computer within five rounds, you win! Before we start you can decide in what range you're playing. Firstly decide the minimum number: ", "Choose a number");
    const minNumber = parseInt(selectedCeilNumber);
    return minNumber;
}

const setGameRangeMax = function () {
    const selectedFloorNumber = prompt("Now decide the maximum number: ", "Choose a number");
    const maxNumber = parseInt(selectedFloorNumber);
    return maxNumber;
}
// Welcome, get name 

const welcomePlayer = function () {
    const playerName = prompt("Welcome! What's your name?", "Tell me!");
    confirm("Hey " + playerName + ". Are you in for a game? Let's play Guess the Number!"); // returns a boolean
    return playerName;
}



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! The actual game to be executed !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


const playTheGame = function () {
    const nameOfPlayer = welcomePlayer();
    const settingGameRangeMin = setGameRangeMin(); 
    const settingGameRangeMax = setGameRangeMax(); 
    alert("You have set the range for this game from " + settingGameRangeMin + " to " + settingGameRangeMax + ". Good luck!");
    for (let i = 1; i < 6; i++) {
        const selectingNumber = playerSelectsNumber(settingGameRangeMin, settingGameRangeMax); 
        const gettingRandomNumber = getRandomNumber2(settingGameRangeMin, settingGameRangeMax); 
        compareNumbers(selectingNumber, gettingRandomNumber);
        if (i <= 4) {
            alert("This was round " + i + " of 5.");
        } 
        else if (i === 5) {
            alert("This was the last round. Game over! Till next time " + nameOfPlayer + "?");
            window.location.reload();
        }
    }
};

playTheGame();