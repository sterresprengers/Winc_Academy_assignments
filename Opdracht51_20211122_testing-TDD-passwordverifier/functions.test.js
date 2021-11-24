const {
    isNotNull,
    hasRightLength,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
    verifyPassword,
} = require("./functions");

describe("Testing utility functions", () => {
    test("1. Password is not null", () => {
        expect(isNotNull("henkie1")).toBe(true);
    });
    test("1. Password is not null", () => {
        expect(isNotNull(null)).toBe(false);
    });
    test("2. Password is shorter than 9 characters", () => {
        expect(hasRightLength("12345678")).toBeTruthy();
    });
    test("2. Password is shorter than 9 characters", () => {
        expect(hasRightLength("asdfghjklqwertyu")).toBeFalsy();
    });
    test("3. Password has one or more uppercase characters", () => {
        expect(hasUpperCaseCharacter("henkie")).toBe(false);
    });
    test("3. Password has one or more uppercase characters", () => {
        expect(hasUpperCaseCharacter("AB")).toBe(true);
    });
    test("4. Password has one or more lowercase characters", () => {
        expect(hasLowerCaseCharacter("AB")).toBe(false);
    });
    test("4.Password has one or more lowercase characters", () => {
        expect(hasLowerCaseCharacter("heie")).toBe(true);
    });
    test("5. Password has one or more digits", () => {
        expect(hasDigit("123abc")).toBe(true);
    });
    test("5. Password has one or more digits", () => {
        expect(hasDigit("abcdef")).toBe(false);
    });
});

describe("Testing combination of conditions", () => {
    test("minimumConditionReached", () => {
        expect(minimumConditionsReached([true, true, true, true, false])).toBe(true);
    });
    test("minimumConditionReached", () => {
        expect(minimumConditionsReached([false, false, false, true, true])).toBe(false);
    });
});

describe("Testing verifyPassword function", () => {
    test("verifyPassword: henkie1", () => {
        expect(verifyPassword("henkie1")).toBe(true);
    });
    test("verifyPassword: 123a", () => {
        expect(verifyPassword("123a")).toBe(true);
    });
    test("verifyPassword: z", () => {
        expect(verifyPassword("z")).toBe(true);
    });
    test("verifyPassword: henkie1234", () => {
        expect(verifyPassword("henkie1234")).toBe(true);
    });
    test("verifyPassword: HENKhenk", () => {
        expect(verifyPassword("HENKhenk")).toBe(true);
    });
    test("verifyPassword: HENK33$", () => {
        expect(verifyPassword("HENK33$")).toBe(false);
    });
    test("verifyPassword: 1234", () => {
        expect(verifyPassword("1234")).toBe(false);
    });
    test("verifyPassword: null", () => {
        expect(verifyPassword(null)).toBe(false);
    });
});

// Winc Github solutions: https://github.com/WincAcademy/solutions-exercises/blob/master/testing_password-verifier/password-verifier.test.js 

// const {
//     isNotNull,
//     hasRightLength,
//     hasUpperCaseCharacter,
//     hasLowerCaseCharacter,
//     hasDigit,
//     // minimumConditionsReached,
//     // verifyPassword,
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