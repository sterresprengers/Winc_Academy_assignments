const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];
  
  for (let person of array) {
    console.log("This is the whole person: ", person);

    // console.log("This are all person-objects in the array: ", array);
    
    // console.log("Naam: ", person.name, "Leeftijd: ", person.age, "Beroep: ", person.profession, );
   
    // console.log("Dit is: ", person.name);

    // console.log("Year of birth of person is: ", 2021 - person.age);

    // console.log(person.name, "is een", person.profession);

    // if (person.age > 50) {
    //     console.log(person.name, "is ouder dan 50");
    // }
    // else {
    //     console.log(person.name, "is jonger dan 50");
    // }
  }