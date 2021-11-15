// // Function declaration (classic style) //////////////////////////////////

// function squareMachine1(number1, number2) {
//     const sum = (number1 * number1) + (number2 * number2);
//     return sum * sum;
// } // >> no semicolon at the end
// console.log(squareMachine1(3,4));
// console.log(squareMachine1(50,60));

// // Function expression (modern style) //////////////////////////////////

// const squareMachine2 = function (number1, number2) {
//     const sum = (number1 * number1) + (number2 * number2);
//     return sum * sum;
// };
// console.log(squareMachine2(3,4));
// console.log(squareMachine2(50,60));

// // Using helper 

// const square = function(number) {
//     return number * number;
// };

// const doSquareCalculation = function(number1, number2) {
//     return square(square(number1) + square(number2));
// };


// // Arrow function (new, hip and dense style) //////////////////////////////////

const squareMachine3 = (number1, number2) => {
    const sum = (number1 * number1) + (number2 * number2);
    return sum * sum;
};
console.log(squareMachine3(3,4));
console.log(squareMachine3(50,60));

// shorter, nu curly braces, with helper function 

// const square = number => number * number;
    
// const doSquareCalculation = (number1, number2) =>
//     square(square(number1) + square(number2));

// console.log(square(50, 60));
