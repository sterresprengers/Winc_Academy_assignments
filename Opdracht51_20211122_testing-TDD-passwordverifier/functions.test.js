// const password1 = "henkie1";
// const password2 = "1234a";
// const password3 = "z";
// const password4 = "henkie1234";
// const password5 = "HENKhenk";
// const password6 = "HENK33$";
// const password7 = "1234";
// const password8 = "";

// const {
//     isNotNull,
//     hasRightLength,
//     // hasUpperCaseCharacter,
//     // hasLowerCaseCharacter,
// } = require("./functions")

// 1 TEST Password is not null
const isNotNull = require("./functions");

test("Password is not null", () => {
    expect(isNotNull("henkie1")).toBeTruthy()
    expect(isNotNull("")).toBeFalsy();
});

// // // // 2 TEST Password is shorter than 9 characters
// const hasRightLength = require("./functions"); 

// test("Password is shorter than 9 characters", () => {
//     expect(hasRightLength("12345678")).toBeTruthy();
//     expect(hasRightLength("asdfghjklqwertyu")).toBeFalsy();
//     expect(hasRightLength("HENKhenk")).toBeFalsy();
// });

// // // 3 TEST Password has one or more uppercase characters
// const upperCaseCharacter = require("./functions");

// test("Password has one or more uppercase characters", () => {
//     expect(upperCaseCharacter("henkie")).toBe(false);
//     expect(upperCaseCharacter("AB")).toBe(true);
// });

// // // 4 Test Password has one or more lowercase characters
// const hasLowerCaseCharacter = require("./functions");

// test("Password has one or more lowercase characters", () => {
//     expect(hasLowerCaseCharacter("AB")).toBe(false);
//     expect(hasLowerCaseCharacter("heie")).toBe(true);
// });


// Winc Github solutions: https://github.com/WincAcademy/solutions-exercises/blob/master/testing_password-verifier/password-verifier.test.js 

// const {
//     // verifyPassword,
//     hasRightLength,
//     isNotNull,
//     hasUpperCaseCharacter,
//     hasLowerCaseCharacter,
//     hasDigit,
//     // minimumConditionsReached,
// } = require("./functions");

// describe("Password verifier utility functions", () => {
//     test("hasRightLength", () => {
//         expect(hasRightLength("123456789")).toBe(false);
//     });

//     test("hasRightLength, happy path 1", () => {
//         expect(hasRightLength("12345678")).toBe(true);
//     });

//     test("hasRightLength, happy path 2", () => {
//         expect(hasRightLength("")).toBe(true);
//     });

//     test("hasRightLength, null", () => {
//         expect(hasRightLength(null)).toBe(false);
//     });

//     test("isNotNull", () => {
//         expect(isNotNull(null)).toBe(false);
//     });

//     test("isNotNull, happy path", () => {
//         expect(isNotNull("a")).toBe(true);
//     });

//     test("hasUpperCaseCharacter", () => {
//         expect(hasUpperCaseCharacter("a")).toBe(false);
//     });

//     test("hasUpperCaseCharacter, happy path 1", () => {
//         expect(hasUpperCaseCharacter("A")).toBe(true);
//     });

//     test("hasUpperCaseCharacter, happy path 2", () => {
//         expect(hasUpperCaseCharacter("Ab")).toBe(true);
//     });

//     test("hasUpperCaseCharacter, only digits", () => {
//         expect(hasUpperCaseCharacter("12")).toBe(false);
//     });

//     test("hasUpperCaseCharacter, null", () => {
//         expect(hasUpperCaseCharacter(null)).toBe(false);
//     });

//     test("hasLowerCaseCharacter", () => {
//         expect(hasLowerCaseCharacter("Z")).toBe(false);
//     });

//     test("hasLowerCaseCharacter, happy path 1", () => {
//         expect(hasLowerCaseCharacter("z")).toBe(true);
//     });

//     test("hasLowerCaseCharacter, happy path 2", () => {
//         expect(hasLowerCaseCharacter("Zy")).toBe(true);
//     });

//     test("hasLowerCaseCharacter, only digits", () => {
//         expect(hasLowerCaseCharacter("12")).toBe(false);
//     });

//     test("hasLowerCaseCharacter, null", () => {
//         expect(hasLowerCaseCharacter(null)).toBe(false);
//     });

//     test("hasDigit", () => {
//         expect(hasDigit("a")).toBe(false);
//     });

//     test("hasDigit, happy path 1", () => {
//         expect(hasDigit("1")).toBe(true);
//     });

//     test("hasDigit, happy path 2", () => {
//         expect(hasDigit("a1")).toBe(true);
//     });

//     test("hasDigit, null", () => {
//         expect(hasDigit(null)).toBe(false);
//     });
// });

// describe("Check combination of conditions", () => {
//     test("minimumConditionsReached, all conditions false", () => {
//         const conditions = [false, false, false, false, false];
//         expect(minimumConditionsReached(conditions)).toBe(false);
//     });

//     test("minimumConditionsReached under cutoff", () => {
//         const conditions = [true, true, false, false, false];
//         expect(minimumConditionsReached(conditions)).toBe(false);
//     });

//     test("minimumConditionsReached on cutoff", () => {
//         const conditions = [true, true, true, false, false];
//         expect(minimumConditionsReached(conditions)).toBe(true);
//     });

//     test("minimumConditionsReached over cutoff", () => {
//         const conditions = [true, true, true, true, false];
//         expect(minimumConditionsReached(conditions)).toBe(true);
//     });
// });

// describe("Verify password", () => {
//     test("verifyPassword null", () => {
//         expect(verifyPassword(null)).toBe(false);
//     });

//     test("verifyPassword '1'", () => {
//         expect(verifyPassword("1")).toBe(false);
//     });

//     test("verifyPassword only digits", () => {
//         expect(verifyPassword("12345678")).toBe(false);
//     });

//     test("verifyPassword only uppercase", () => {
//         expect(verifyPassword("ABC")).toBe(false);
//     });

//     test("verifyPassword only lowercase", () => {
//         expect(verifyPassword("abc")).toBe(true);
//     });

//     test("verifyPassword only lowercase, but too long", () => {
//         expect(verifyPassword("abcdefghi")).toBe(false);
//     });

//     test("verifyPassword lowercase and uppercase, but too long", () => {
//         expect(verifyPassword("Ab")).toBe(true);
//     });

//     test("verifyPassword, correct password", () => {
//         expect(verifyPassword("Ab1")).toBe(true);
//     });
// });