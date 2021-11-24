// const password1 = "henkie1";
// const password2 = "1234a";
// const password3 = "z";
// const password4 = "henkie1234";
// const password5 = "HENKhenk";
// const password6 = "HENK33$";
// const password7 = "1234";
// const password8 = "";

// Utility functions ////////////////////////////////////////////

// 1 Password is not null
// const isNotNull = function(str) {
//     if (str === "") {
//         return false
//     } else {
//         return true
//     };
// };
// console.log(isNotNull(password1));
// console.log(isNotNull(password8));
const isNotNull = str => str !== "";
module.exports = isNotNull();

// // 2 Password is shorter than 9 characters

// const hasRightLength = function(str) {
//     if (str.length <= 8) {
//         return true;
//     } else {
//         return false;
//     }
// }
// // console.log(hasRightLength(password4));
// // console.log(hasRightLength(password5));
// console.log(hasRightLength("12345678"));
// console.log(hasRightLength("123456789"));
// const hasRightLength = (str) => isNotNull(str) && str.length < 9;
// const hasRightLength = (str) => str.length < 9;
// module.exports = hasRightLength;

// // 3 Password has one or more uppercase characters
// const hasUpperCaseCharacter = (str) => isNotNull(str) && str.toLowerCase() !== str;
// const upperCaseCharacter = (str) => str.toLowerCase() !== str;
// module.exports = upperCaseCharacter;

// // 4 Password has one or more lowercase characters

// const hasLowerCaseCharacter = (str) => isNotNull(str) && str.toUpperCase() !== str;
// console.log(hasLowerCaseCharacter("HENKHENK"))
// console.log(hasLowerCaseCharacter("henkie"))
// module.exports = hasLowerCaseCharacter;

// // 5 Password has one or more digits
// const hasDigit = (str) => str;
// module.exports = hasDigit;

// // at least 3 o the above conditions are true
// // condition 4 is always true
// const minimumConditionsReached = conditions => {
//     //conditions is an array of booleans
//     trueConditions = conditions.filter(bool => bool);
//     return trueConditions.length >= 3;
// };




// // "Outer" function ////////////////////////////////////////////
// const verifyPassword = password => {
//     constconditions = [
//         isNotNull(password),
//         hasRightLength(password),
//         hasUpperCaseCharacter(password),
//         hasLowerCaseCharacter(password),
//         hasDigit(password)
//     ]; 
//     const result =
//         minimumConditionsReached(conditions) && hasLowerCaseCharacter(password);

//     return result;
// }

// module.exports = {
// //     // verifyPassword,
    // hasRightLength,
    // isNotNull,
    // hasUpperCaseCharacter,
    // hasLowerCaseCharacter,
// //     // hasDigit,
// //     // minimumConditionsReached
// };

// Winc Github solution: https://github.com/WincAcademy/solutions-exercises/blob/master/testing_password-verifier/password-verifier.js 

// // Utility functions
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
//     verifyPassword,
//     hasRightLength,
//     isNotNull,
//     hasUpperCaseCharacter,
//     hasLowerCaseCharacter,
//     hasDigit,
//     minimumConditionsReached
// };