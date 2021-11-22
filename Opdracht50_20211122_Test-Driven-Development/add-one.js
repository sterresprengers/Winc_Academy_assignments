const myArray = [31, 57, 12, 5];

// Longer notation: 
// const addOne = function(numbers) {
//     let result = numbers.map(num => {
//         const oneAdded = num + 1;
//         return oneAdded
//     });
//     return result;
// };

// Short notation: 
const addOne = (numbers) => numbers.map((num) => num + 1);

console.log(addOne(myArray));

module.exports = addOne;