
// Verander deze input om te zien of je code werkt.
// Comment bijvoorbeeld regel 8 tot 11 weer aan, en regel 3 tot 5 uit.
const age = 18;
const isFemale = true;
const driverStatus = "bob";

/*
Testdata
const age = 16; 
const isFemale = false;
const driverStatus = 808; 
*/

if (age >= 18) {
  console.log("Je mag naar binnen");
} else {
  console.log("Nope, je mag niet naar binnen");
}

if (isFemale) {
  console.log("Je ticket zegt dat je een vrouw bent!");
} else {
  console.log(
    "Helaas je mag niet naar binnen, omdat je een man bent."
  );
}

if (driverStatus === "bob") {
  console.log("Je bent de bob, je mag autorijden");
} else {
  console.log("Je bent geen bob, hier met die autosleutels");
}


// const age = 17;

// if (age > 18) {
//     document.write("You may enter the pub. ");
// } else if (age < 18) {
//     document.write("You cannot enter the pub. ");
// } else if (age == 18) {
//     document.write("You are 18 and may enter the pub. ");
// }

// const isFemale = false;

// if (isFemale) {
//     document.write("Welcome to ladies night! ");
// } else {
//     document.write("No men allowed! ");
// }

// let driverStatus = 'Bob';

// if (driverStatus = 'Bob') {
//     document.write("You may drive home. ");
// } else {
//     document.write("You cannot drive. ")
// }

// driverStatus = 'drunk';
// console.log(driverStatus); 

//I get ReferenceError in terminal (via node), because document is not defined