const words = ["sun", "potato", "roundabout", "pizza"];

const getWordLengths = function(someWords) {
    return someWords.map(word => word.length);
    // const amount = someWords.map(word => {
    //     return word.length
    // })
    // return amount 
};

console.log(getWordLengths(words));

module.exports = getWordLengths;