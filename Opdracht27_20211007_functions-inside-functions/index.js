// function inside function ////////////////////////////////////////

// const checkAge = function (age) {
//     console.log("Entering checkAge..")
//     if (age >= 18) {
//         return true;
//     }
//     else {
//         return false;
//     }
// };

// const clubBouncer = function (age) {
//     console.log("Entering clubBouncer..")
//     const ageChecker = checkAge(age);
//     if (ageChecker === true) {
//         return ("Hello there");
//     }
//     else {
//         return ("Hello kiddo");
//     }
// };

// console.log(clubBouncer(19));
// console.log(clubBouncer(17));

////// solution by Winc //////////////////////
// const isAdult = function(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// };

// const greet = function(age) {
//     if (isAdult(age)) {
//         return "Hello there";
//     } else {
//         return "Hey kiddo";
//     }
// };

// console.log(greet(65)); // "Hello there"
// console.log(greet(10)); // "Hey kiddo"

// // We can make this a lot shorter by using arrow functions, the ternary if
// // statement and returning booleans immediately. You don't need to write it
// // this short, but it's good to see that it's possible.

// const isAdultShort = age => age >= 18;

// const greetShort = age => (isAdult(age) ? "Hello there" : "Hey kiddo");

// console.log(greetShort(65)); // "Hello there"
// console.log(greetShort(10)); // "Hey kiddo"





// VAT exercise 1 ////////////////////////////////////////

// const vatCalculator = function(baseprice) {
//     console.log("Entering vatCalculator with: ", + baseprice);
//     const vatPrice = (baseprice * 0.21);
//     return vatPrice;
// };

// const nettoPriceCalculator = function(baseprice) {
//     console.log("Entering nettoPriceCalculator with: " + baseprice);
//     const brutoPrice = vatCalculator(baseprice);
//     const nettoPrice = brutoPrice + baseprice;
//     return nettoPrice;
// };
// console.log(nettoPriceCalculator(8.98));
// console.log(nettoPriceCalculator(100));
// console.log(nettoPriceCalculator(4000));

////// solution by Winc //////////////////////
// const calculateVAT = function(basePrice, VATPercentage) {
//     return basePrice * (VATPercentage / 100);
// };

// const calculatePriceIncludingVAT = function(basePrice, VATPercentage) {
//     const VAT = calculateVAT(basePrice, VATPercentage);
//     return basePrice + VAT;
// };

// console.log(calculatePriceIncludingVAT(1000, 21)); // 1210
// console.log(calculatePriceIncludingVAT(2, 9)); // 2.18





// VAT exercise 2 ////////////////////////////////////////

// const vatAmountCalculator = function(nettoPrice, vatPercentage) {
//     console.log("Entering vatCalculator with: " + nettoPrice, vatPercentage);
//     const vatCalculator = (vatPercentage / 100);
//     const vatAmount = (vatCalculator * nettoPrice);
//     console.log("Output vatCalculator: " + vatAmount);
//     return vatAmount
// };

// const brutoPriceVatAmountCalculator = function(nettoPrice, vatPercentage) {
//     console.log("Entering brutoPriceCalculator with: " + nettoPrice, vatPercentage);
//     const vatTotal = vatAmountCalculator(nettoPrice, vatPercentage);
//     const brutoPrice = (nettoPrice - vatTotal);
//     console.log("Output calculation brutoPrice: " + brutoPrice);
//     const vatAmount = (nettoPrice - brutoPrice);
//     return [brutoPrice, vatAmount];
// }
// console.log(brutoPriceVatAmountCalculator(1000, 21));
// console.log(brutoPriceVatAmountCalculator(8, 9));


// solution by Winc /////////////////////
// const calculateBasePrice = function(priceIncludingVAT, VATPercentage) {
//     const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
//     return basePrice;
// };

// const calculateBasePriceAndVAT = function(priceIncludingVAT, VATPercentage) {
//     const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
//     const VAT = priceIncludingVAT - basePrice;
//     return [basePrice, VAT];
// };

// console.log(calculateBasePriceAndVAT(1210, 21)); // [1000, 210]
// console.log(calculateBasePriceAndVAT(2.18, 9)); // [2, 0.18]