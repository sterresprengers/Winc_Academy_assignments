// // Utility functions ////////////////////////////////////////////

// // 1 Password is not null >>>>>>>>>

// // const isNotNull = str => str !== "";
const isNotNull = str => str !== null;
// // // // module.exports = isNotNull;

// // // // // 2 Password is shorter than 9 characters >>>>>>>>>

const hasRightLength = str => isNotNull(str) && str.length < 9;
// // const hasRightLength = str => isNotNull(str) && str.length <= 8;
// // // // const hasRightLength = (str) => str.length < 9;
// // // // module.exports = hasRightLength;

// // // // // 3 Password has one or more uppercase characters >>>>>>>>>

const hasUpperCaseCharacter = str => isNotNull(str) && str.toLowerCase() !== str;
// // // // const hasUpperCaseCharacter = (str) => str.toLowerCase() !== str;
// // // // module.exports = hasUpperCaseCharacter;

// // // // // 4 Password has one or more lowercase characters >>>>>>>>>

const hasLowerCaseCharacter = str => isNotNull(str) && str.toUpperCase() !== str;
// // // // const hasLowerCaseCharacter = (str) => str.toUpperCase() !== str;
// // // // module.exports = hasLowerCaseCharacter;

// // // // // 5 Password has one or more digits >>>>>>>>>

const hasDigit = str => /\d/.test(str); // >> Regex
// // // // module.exports = hasDigit;

// // // // // at least 3 o the above conditions are true >>>>>>>>>>>
// // // // // condition 4 is always true >>>>>>>>>>>>>>>>>>>>>>>>>>>

const minimumConditionsReached = conditions => {
    //conditions is an array of booleans
    trueConditions = conditions.filter(bool => bool);
    return trueConditions.length >= 3;
};
// // module.exports = minimumConditionsReached;

// // // // "Outer" function ////////////////////////////////////////////
const verifyPassword = password => {
    const conditions = [
        isNotNull(password),
        hasRightLength(password),
        hasUpperCaseCharacter(password),
        hasLowerCaseCharacter(password),
        hasDigit(password)
    ]; 
    const result =
        minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);
    return result;
};

module.exports = {
    isNotNull,
    hasRightLength,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
    verifyPassword,
};

// Winc Github solution: https://github.com/WincAcademy/solutions-exercises/blob/master/testing_password-verifier/password-verifier.js 

// Utility functions
// const isNotNull = str => str !== null;

// const hasRightLength = str => isNotNull(str) && str.length <= 8;

// const hasUpperCaseCharacter = str =>
//     isNotNull(str) && str.toLowerCase() !== str;

// const hasLowerCaseCharacter = str =>
//     isNotNull(str) && str.toUpperCase() !== str;

// const hasDigit = str => /\d/.test(str);

// const minimumConditionsReached = conditions => {
//     // conditions is an array of booleans
//     trueConditions = conditions.filter(bool => bool);
//     return trueConditions.length >= 3;
// };

// // "Outer" function
// const verifyPassword = password => {
//     const conditions = [
//         isNotNull(password),
//         hasRightLength(password),
//         hasUpperCaseCharacter(password),
//         hasLowerCaseCharacter(password),
//         hasDigit(password)
//     ];
//     const result =
//         minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

//     return result;
// };

// module.exports = {
//     isNotNull,
//     hasRightLength,
//     hasUpperCaseCharacter,
//     hasLowerCaseCharacter,
//     hasDigit,
//     minimumConditionsReached,
//     verifyPassword,
// };