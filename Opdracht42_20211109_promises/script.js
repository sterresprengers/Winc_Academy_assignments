// // Anexample of Promise, and calling it
// const sinterklaasIsGul = false;
// // const sinterklaasIsGul = true;

// // Promise maken (dit hoeven jullie dus niet te leren, dit is aan de API (back-end) kant)
// const krijgIkEenNieuweiPhone = new Promise(
//     (resolve, reject) => {
//         if (sinterklaasIsGul) {
//             const smartphone = {
//                 merk: 'Apple',
//                 type: 'iPhone 11'
//             };
//             resolve(smartphone);
//         } else {
//             const metWelkeReden = new Error('Je bent stout geweest, geen cadeaus voor jou');
//             reject(metWelkeReden);
//         }

//     }
// );

// // Promise aanroepen, of "consumeren" (dit zullen je dus wel doen en moeten leren)
// const vraagAanSinterklaas = () => {
//     krijgIkEenNieuweiPhone
//         .then(function (resolved) {
//             // yay, je hebt een nieuwe smartphone
//             console.log(resolved);
//         })
//         .catch(function (error) {
//             // oeps, geen Sinterklaas cadeau dit jaar
//             console.log(error.message);
//         });
// }
// // vraagAanSinterklaas();
// ///////////////////////////////////////////////////////////////////////////////////////////////
// https://replit.com/@JasonHughes/Promise-Practice
// /*
// Exercise 1:
// Write a function testNum that takes a number as an argument and returns a Promise that tests 
// if the value is less than or greater than the value 10. Log the result to the console.
// */

const testNum = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(num + " is greater than 10");
        } else {
            reject(num + " is less than 10");
        }
    });
};
testNum(9)
    .then(result => console.log(result))
    .catch(error => console.log(error));
testNum(11)
    .then(result => console.log(result))
    .catch(error => console.log(error));    

  
/*
Exercise 2:
Write two functions that use Promises that you can chain! 
The first function, makeAllCaps(), will take in an array of words and capitalize them, 
and then the second function, sortWords(), will sort the words in alphabetical order. 
If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

const makeAllCaps = words => {
    return new Promise((resolve, reject) => {
        if (words.every(word => {return typeof word === "string";})) {
            resolve(sortWords(words.map(word => {return word.toUpperCase()})))
        } else {
            reject("Not a string!");
        }
    });
};

const sortWords = words => {
    return new Promise((resolve, reject) => {
        if (words) {
            resolve(words.sort());
        } else {
            reject("string only!");
        }
    });
};

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
    .then(sortWords(arrayOfWords))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(complicatedArray)
    .then(sortWords(arrayOfWords))
    .then(result => console.log(result))
    .catch(error => console.log(error));