// // While Loop >> ////////////////////////////////////////////////////////////

// const colors = ['yellow', 'blue', 'red', 'orange'];

// let i = 0
// while (i < colors.length) {
//     console.log(colors[i]);
//     i++;
// }

// solution by Winc
// const myColorArray = ["yellow", "blue", "red", "orange"];

// let i = 0;
// while (i < myColorArray.length) {
//   console.log(myColorArray[i]);
//   i++;
// }




// // For Loop ////////////////////////////////////////////////////////////

// const colors = ['yellow', 'blue', 'red', 'orange'];

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

// solution by Winc
// const myColorArray = ["yellow", "blue", "red", "orange"];
// for (let i = 0; i < myColorArray.length; i++) {
//     console.log(myColorArray[i]);
// }





// Array Methods ////////////////////////////////////////////////////////////

// const colors = ['yellow', 'blue', 'red', 'orange'];
// colors.forEach(element => console.log(element));

// solution by Winc //////
// const myColorArray = ["yellow", "blue", "red", "orange"];
// myColorArray.forEach((color) => console.log(color));







// vragen - antwoorden

// 1. Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
// While loop: doesn't get it to work. Propably about 4 lines
// For loop: 2 lines of code

// 2. Hoeveel regels neemt mijn forEach method in beslag?
// forEach method: 1 line of code

// 3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? 
// Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
// forEach looks more like a function, and in my head loops are a lot like functions, so it's easier for me to read the code. 
// with forEach you don't need to make it into a formula in order to console.log the items in the array
// --> je kunt niet meer verstrikt raken in een infinite loop.
// --> je hoeft niet meer bij te houden met een i, bij welke iteratie je bent.
// --> je hebt direct toegang tot het item waar je overheen loopt dmv het argument en de callback-functie die je de array-method geeft als argument.
// --> de naam "forEach" zegt ook meteen wat je gaat doen en is semantischer dan een while of for loop.

// 4. Kun je een array method gebruiken op een object? 
// Het antwoord is nee.
// Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties 
// kunt console.loggen met een loop: 'Looping through the properties of an object'.
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

// const object = { a: 1, b: 2, c: 3, d: 4, e: 5 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// solution by Winc
// const myColors = {
//     colorWall: "blue",
//     colorFruit: "orange",
//     colorCar: "red",
//     colorHair: "white",
//     colorGras: "green",
// };
// for (x in myColors) {
//     console.log(myColors[x]);
// }

