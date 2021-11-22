const words = ["sun", "potato", "roundabout", "pizza"];

const getWordLengths = function(someWords) {
    const amount = someWords.map(word => {
        return word.length
    })
    return amount 
};

console.log("with array of words", getWordLengths(words));

module.exports = getWordLengths;