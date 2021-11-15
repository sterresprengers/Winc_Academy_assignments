// Deel A: zet de functie om naar een arrow functie
const ikRockArrowFunctions = function () {
  console.log("Joe, ik rock de arrow functions!");
};

ikRockArrowFunctions()


const ikRockArrowFunctions = () => console.log("Joe, ik rock de arrow functions!");
  
ikRockArrowFunctions()

// Deel B: schrijf de onderstaande functie om naar een arrow function op één regel

const fivePlusSeven = function () {
    return 5 + 7
};
  
fivePlusSeven();

const fivePlusSeven = () => 5 + 7
  
// Deel C: Schrijf een arrow function, op 1 regel (dus met een impliciete return statement), 
// die de params a en b bij-elkaar optelt. Noem de functie myFunction.

const myFunction = (a, b) => a + b; 


// Deel D: Schrijf een arrow function op 1 regel, die de parameter a behoudt, 
// en altijd a plus 5 returned. Noem de functie addFive.

const addFive = a => a + 5;


// Deel E: Schrijf een arrow function met de naam createObject met 
// een implicit return statement (dus op 1 regel) die een simpel object returned: {greeting: "hoi"}

const createObject = () => ({greeting: "hoi"});

