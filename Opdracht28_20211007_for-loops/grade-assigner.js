// function assignGrade(score) {
//   for (let score = 100; score >= 60; score--) {
//     if (score > 90) {
//         console.log("For scoring ", score, " points, you get an A");
//     } else if (score > 80) {
//         console.log("For scoring ", score, " points, you get a B");
//     } else if (score > 70) {
//         console.log("For scoring ", score, " points, you get a C");
//     } else if (score > 65) {
//         console.log("For scoring ", score, " point, you get a D");
//     } else {
//         console.log("For scoring ", score, " points, you get an E");
//     }
//   }
// }
// assignGrade();


// // solution given by Winc ///////////////////////////

function assignGrade(score) {
    if (score > 90) {
      return "A";
    } else if (score > 80) {
      return "B";
    } else if (score > 70) {
      return "C";
    } else if (score > 65) {
      return "D";
    } else {
      return "F";
    }
  }
    for (let i = 60; i <= 100; i++) {
    console.log("Voor " + i + " punten, krijg je een " + assignGrade(i));
}