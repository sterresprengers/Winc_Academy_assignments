//// A ////////////////////////////////////////////////////////////////////////////////////
// Schrijf een JavaScript functie die een bepaald item weet te vinden 
// en terug geeft op basis van een bepaalde value.
// Zoek het hele object van Spiderman, gebaseerd op de name "Spiderman". Gebruik .find.

// const superheroes = [
//     {name: "Batman", alter_ego: "Bruce Wayne"}, 
//     {name: "Superman", alter_ego: "Clark Kent"}, 
//     {name: "Spiderman", alter_ego: "Peter Parker"}]; 
    
// const findSpiderMan = superheroes.find((hero) => {
//     return hero.name === "Spiderman";
// });

// console.log(findSpiderMan);

// OR: 

// const findSpiderMan = function(heroes) {
//     return heroes.find((person) => person.name === "Spiderman");
// }

// console.log(findSpiderMan(superheroes));
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}


//// B ////////////////////////////////////////////////////////////////////////////////////
// In een array met integers (afgeronde getallen). Zorg dat je een array returned met de integers verdubbeld. 
// Gebruik de .forEach method of, een level hoger: de .map method.

// const doubleArrayValues = function(array) {
//     array.forEach((value) => console.log(value + value));
// };

// // OR:

// const doubleArrayValues = function(array) {
//     array.map((value) => console.log(value + value));
// };

// doubleArrayValues([1, 2, 3]); 
// // result should be [2, 4, 6]

//// C ////////////////////////////////////////////////////////////////////////////////////
// In een array met integers. Schrijf een JavaScript functie die checkt of er een nummer (integer) 
// in de array aanwezig is dat groter is dan 10.

// const containsNumberBiggerThan10 = function(array) {
//     console.log(array.some(number => number > 10));
// };
// containsNumberBiggerThan10([1,2,1,2,1,2]);
// // // result should be false

// OR:

// const containsNumberBiggerThan10 = function(array) {
//     return array.some(number => {return number > 10;
//     });
// };


// console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// // result should be true

//// D ////////////////////////////////////////////////////////////////////////////////////
// In een array met strings. Schrijf een JavaScript functie die kijkt of er een bepaalde 
// string: "Italy" in de array aanwezig is.

// const isItalyInTheGreat7 = function(array) {
//     console.log(array.includes('Italy'));
// };

// OR: 

// const isItalyInTheGreat7 = function(array) {
//     console.log(array.some(element => element ==='Italy'));
// };
// 
// isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']) 
// // result should be true

//// E ////////////////////////////////////////////////////////////////////////////////////
// In een array met integers. Schrijf een JavaScript functie die elke integer vertienvoudigt. 
// Gebruik .forEach.

// const tenfold = function(array) {
//     array.forEach(number => console.log(number * 10));
// };

// tenfold([1, 4, 3, 6, 9, 7, 11]);
// // result should be [10, 40, 30, 60, 90, 70, 110]

// OR (Winc solutions):

// const tenfold = function(array) {
//     let newArray = [];
//     array.forEach(number => {
//       newArray.push(number * 10);
//     });
//     return newArray;
// };
// // OR .map method
// 
// const tenfoldMap = function(array) {
//     return array.map(number => {
//       return number * 10;
//     });
// };

// console.log("tenfold", tenfold([1, 4, 3, 6, 9, 7, 11]));
// console.log("tenfold", tenfoldMap([1, 4, 3, 6, 9, 7, 11]));

//// F ////////////////////////////////////////////////////////////////////////////////////
// In een array met integers. Schrijf een JavaScript functie die checkt of alle waardes in 
// de array onder de 100 zijn, en true or false retourneert.

// const isBelow100 = function(array) {
//     return array.every(number => number < 100);
// }
// 
// console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
// // result should be: false

//// G ////////////////////////////////////////////////////////////////////////////////////
// In een array met integers. Schrijf een JavaScript functie die alle waardes in de array 
// bij elkaar optelt en het totaal van de som retourneert. Gebruik de .reduce method. 

// const bigSum = function(array) {
//     const reducer = (previousValue, currentValue) => previousValue + currentValue;
//     return array.reduce(reducer);
// }

// console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]));
// // result should be 1118

// OR (Winc Solution)

// const numbers = [1, 81, 4, 53, 3, 6, 11, 77, 84, 98, 101, 206, 234];

// const bigSum = function(array) {
//   return array.reduce((acc, number) => {
//     return acc + number;
//   });
// };
// console.log("Big sum, add all numbers in array:", bigSum([3, 4]));
// console.log("Big sum, add all numbers in array:", bigSum(numbers));