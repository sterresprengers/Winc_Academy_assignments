const words = ["house", "train", "slide", "needle", "book"];

// Long notation: 
// const findNeedle = function(words) {
//     return words.indexOf("needle");
//     // return findNeedleIndex
// };

// Short notation:
const findNeedle = (words => words.indexOf("needle"));

console.log(findNeedle(words));
module.exports = findNeedle;