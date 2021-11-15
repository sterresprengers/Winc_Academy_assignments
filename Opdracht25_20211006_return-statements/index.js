
// 1. Checking if a number is big ///////////////////////////////////////////////////////////////

// const numberChecker = function (number) {
//     if (number <= 100) {
//         return ("false"); // or just: return false;
//     }
//     else {
//         return ("true"); // or just: return true;
//     }
// }
// console.log(numberChecker(99));
// console.log(numberChecker(104));

/* shorter alternative (given by WinC): Because number < 100 already returns 
true or false we can immediately return that too to make the function shorter:
 */
// const numberIsBig = function (number) {
//   return number > 100;
// };
// console.log(numberIsBig(150));
// console.log(numberIsBig(50));
// console.log(numberIsBig(0));
// console.log(numberIsBig(999));




// 2. Bouncer at the club ///////////////////////////////////////////////////////////////

// const clubBouncer = function (amount, age) {
//     if (amount <= 500 && age < 18) {
//         return("This club is for adults");
//     }
//     else if (amount <= 500 && age >= 18) {
//         return("Come in");
//     }
//     else if (amount > 500 && age >= 18) {
//         return("It's too busy, come back later");
//     }
//     else {
//         return("It's too busy, but this club is for adults anyway");
//     }
// }
// console.log(clubBouncer(300, 17));
// console.log(clubBouncer(200, 19));
// console.log(clubBouncer(600, 21));
// console.log(clubBouncer(700, 16));


////////
// Solution given by WinC: 

// const getBouncerReaction = function(
//     maxVisitors,
//     currentVisitors,
//     ageOfPotentialVisitor
// ) {
//     if (ageOfPotentialVisitor < 18) {
//         return "this is a club for adults";
//     }

//     if (currentVisitors >= maxVisitors) {
//         return "it's too busy now, come back later";
//     } else {
//         return "come in";
//     }
// };

// console.log(getBouncerReaction(2000, 0, 15)); // "this is a club for adults"
// console.log(getBouncerReaction(2000, 1999, 50)); // "come in"
// console.log(getBouncerReaction(2000, 2000, 40)); // "it's too busy now, come back later"
// console.log(getBouncerReaction(2000, 2999, 30)); // "it's too busy now, come back later"

////////
// or shorter: 

// const getBouncerReaction = function(
//     maxVisitors,
//     currentVisitors,
//     ageOfPotentialVisitor
// ) {
//     if (ageOfPotentialVisitor < 18) return "this is a club for adults";
//     if (currentVisitors >= maxVisitors) return "it's too busy now, come back later";
//     return "come in";
// };

/////////
// or: We can also use a temporary response variable, put a value into it and then return 
// that variable at the end of the function. This can sometimes be a better pattern.

// const getBouncerReaction = function(
//     maxVisitors,
//     currentVisitors,
//     ageOfPotentialVisitor
// ) {
//     let response;
//     if (ageOfPotentialVisitor < 18) {
//         response = "this is a club for adults";
//     } else if (currentVisitors >= maxVisitors) {
//         response = "it's too busy now, come back later";
//     } else {
//         response = "come in";
//     }
//     return response;
// };




// 3. Calculating average ///////////////////////////////////////////////////////////////

// const calculateAverageA = function (nmbr1, nmbr2, nmbr3, nmbr4, nmbr5) {
//     const average = ((nmbr1 + nmbr2 + nmbr3 + nmbr4 + nmbr5) / 5);
//     return Math.round(average)
// }
// console.log(calculateAverageA(4,6,7,2,9));


/////////
//Solution given by Winc:
// 
// const calculateAverage = function(
//     number1,
//     number2,
//     number3,
//     number4,
//     number5
// ) {
//     const total = number1 + number2 + number3 + number4 + number5;
//     const average = total / 5;
//     const averageRounded = Math.round(average);
//     return averageRounded;
// };