// Single multiplication table (9)

for (let i = 1; i <= 10; i++) {
    console.log(i, "x 9 =", (i * 9));
}

// Ten multiplication tables

for (let x = 1; x <= 10; x++) {
    for (let y = 1; y <= 10; y++) {
        console.log(x, "x", y, "=", (x * y));
    }
}





// solutions given by Winc ///////////////////////

// // Multiplication tables
// const multiplier = 9;
// for (let i = 0; i <= 10; i++) {
//   let result = multiplier * i;
//   console.log(multiplier + " * " + i + " = " + result);
// }

// // Bonus
// for (let multiplier = 0; multiplier <= 10; multiplier++) {
//   for (let i = 0; i <= 10; i++) {
//     let result = multiplier * i;
//     console.log(multiplier + " * " + i + " = " + result);
//   }
// }