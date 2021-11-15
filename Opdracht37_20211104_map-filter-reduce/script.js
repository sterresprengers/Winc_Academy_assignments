const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "Unknown"
    }
];

// 1 /////////////////////////////////////////////////////////////////
// Array van alle superhelden namen 

// returns an object (that looks linke an array): 
//
// const heroNames = superheroes.map(person => {
//      return person.name
//      });

// console.log("Only the names: ", heroNames);
// console.log("This is an ", typeof(heroNames));

// 2 /////////////////////////////////////////////////////////////////
// Array van alle "lichte" superhelden (< 190 pounds)

// const ligthHeroes = superheroes.filter(person => person.weight < 190);
// console.log("Heroes under 190 pounds: ", ligthHeroes);

// 3 /////////////////////////////////////////////////////////////////
// Maak een array met de namen van de superhelden die 200 pounds wegen

// const only200PoundsHeros = superheroes.filter(person => {
//     return person.weight === "200"
//     }).map(hero => {
//         return hero.name
//     });
// console.log("Heroes of 200 pounds: ", only200PoundsHeros);

// Shorter / cleaner: 

// const only200PoundsHeros = superheroes
//     .filter(person => person.weight === "200")
//     .map(hero => hero.name);
// console.log("Heroes of 200 pounds: ", only200PoundsHeros);


// 4 /////////////////////////////////////////////////////////////////
// Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad

// const overviewFirstAppearances = superheroes.map((person) => {
//     return person.first_appearance;
// });
// console.log("List of first appearances: ", overviewFirstAppearances);

// shorter / cleaner

// const overviewFirstAppearances = superheroes.map(person => person.first_appearance);
// console.log("List of first appearances: ", overviewFirstAppearances);


// 5 /////////////////////////////////////////////////////////////////
// Maak een array met alle superhelden van DC Comics. Is dat gelukt? 
// Herhaal de bovenstaande functie dan en maak ook een array met alle superhelden van Marvel Comics.

// const heroesDcComics = superheroes.filter(person => {
//     return person.publisher === "DC Comics"
//     }).map(hero => {
//     return hero.name
// });
// console.log(heroesDcComics);

// const heroesMarvelComics = superheroes.filter(person => {
//     return person.publisher === "Marvel Comics"
//     }).map(hero => {
//     return hero.name
// });
// console.log(heroesMarvelComics);

// Shorter / cleaner: 

// const heroesMarvelComics = superheroes
//     .filter(person => person.publisher === "Marvel Comics")
//     .map(hero => hero.name);
// console.log(heroesMarvelComics);


// 6 /////////////////////////////////////////////////////////////////
// Tel het gewicht van alle superhelden van DC Comics bij elkaar op. 
// Let op! Conditionals to the rescue! Het gewicht dat je hier ziet, van welk datatype is dat? 
// Een nummer? Of een string? Oh ja, en hebben alle superhelden wel een gewicht?

// const totalWeightDcComicsHeroes = superheroes
//     .filter(person => person.publisher === "DC Comics")
//     .map(person => parseInt(person.weight))
//     .reduce((currentTotal, person) => {
//         return person + currentTotal
// });

// console.log("Total of DC Comics heroes weight = ", totalWeightDcComicsHeroes);

// 7 /////////////////////////////////////////////////////////////////
// Doe hetzelfde met alle superhelden van Marvel Comics

// const totalWeightMarvelComicsHeroes = superheroes
//     .filter(person => person.publisher === "Marvel Comics")
//     .map(person => {
//         if (person.weight === "Unknown") {
//             return 0
//         }
//         else {
//             return parseInt(person.weight)
//         }
//     })
//     .reduce((currentTotal, person) => {
//         return person + currentTotal
// });
    
// console.log("Total Marvel Comics weight = ", totalWeightMarvelComicsHeroes);

// 8 /////////////////////////////////////////////////////////////////
// Bonus: zoek de zwaarste superheld!

// const heaviestHero = superheroes
//     .map(person => {
//         if (person.weight === "Unknown") {
//             return 0
//         }
//         else {
//             return parseInt(person.weight)
//         }
//     })
//     .reduce((a, b) => {
//         return Math.max(a, b)
//     // }).map(hero => {
//     //     return hero.name
// });
    
// console.log("The heaviest hero is... : ", heaviestHero);

// OR solution by WinC
// const allHeroes = superheroes.map(hero => {
//     const weight = hero.weight !== "unknown" ? parseInt(hero.weight) : 0;
//     hero.weight = weight;
//     return hero;
//   });
//   // next, use reduce to find the largest value
//   const heaviestHero = allHeroes.reduce(
//     (currentHeaviestHero, currentHero) => {
//       if (currentHero.weight > currentHeaviestHero.weight) {
//         return currentHero;
//       } else {
//         return currentHeaviestHero;
//       }
//     },
//     allHeroes[0]
//     // met deze laatste waarde geef je aan wat de initiele waarde moet zijn van de functie
//   );
  
//   console.log("Heaviest her0000o:", heaviestHero);