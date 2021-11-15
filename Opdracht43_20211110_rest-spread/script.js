
// Rest operator >> makes list of parameters into array

function sumWithRest(...numbers) {
    return numbers.reduce((prev, current) => {
        return prev + current
    });
}

console.log(sumWithRest(2, 4, 6, 8))
console.log(sumWithRest(10, 400, 20, 18))




// Spread operator >> 

// let arr1 = [3, 5, 1]
// let arr2 = [8, 3, -8, 1]
// // console.log(Math.max(arr[0], arr[1], arr[2]))
// console.log(Math.max(...arr1, ...arr2));

// function sumWithSpread(array) {
//     console.log(...array)
//     console.log(...array.join(""))
// }

// const numbers = [2, 20, 200, 2000]
// sumWithSpread(numbers)


const sum2 = function(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  
  const digits = [1, 2, 3];
  
  console.log(sum2(...digits));
  // expected result: 6