// Opdracht 1: Lijst landen, gesorteerd op naam

const btnListOfRegions = document.querySelector("#btn-list-of-regions");
const body = document.querySelector("body");
const main = document.querySelector("main");


const setRegionsList = (array) => {
    const listOfRegions = document.querySelector("#list-of-regions");
    const allRegions = array.map(data => {
        return data.region;
    }).sort();
    let uniqueRegions = [...new Set(allRegions)];
    uniqueRegions.map(region => {
        const liTag = document.createElement("li");
        liTag.innerHTML = region;
        listOfRegions.appendChild(liTag);
    });
};

btnListOfRegions.addEventListener("click", () => {
    main.querySelectorAll("ol *").forEach(n => n.remove());
    setRegionsList(randomPersonData);
});


/* 
Opdracht 2 Maak een lijst van mensen:
laat voor- en achternaam en hun foto zien; sorteer de lijst op voornaam; elke persoon op die lijst moet
- vrouw zijn, - ouder zijn dan 30 (1990 of ouder), - een steenbok zijn (jarig van 22 december t/m 19 januari)
*/

const btnCapricornWomen = document.querySelector("#btn-capricorn-women");

const setCapricornWomen = (array) => {
    const listCapricornWomen = document.querySelector("#list-capricorn-women");
    array.filter(person => person.gender === "female")
    .filter(female => female.age > 30)
    .filter(femaleOver30 => {
        const birthday = femaleOver30.birthday.dmy;
        const month = parseInt(birthday.split("/")[1]);
        const day = parseInt(birthday.split("/")[0]);
        const isCapricorn = (month === 12 && day >= 20 || month === 1 && day <=20)
        return isCapricorn;
    }).map(capricornFemaleOver30 => {
        const liTag = document.createElement("li");
        const liTagContent = document.createTextNode(
            ` ${capricornFemaleOver30.name} ${capricornFemaleOver30.surname}`
        );
        const imgTag = document.createElement("img");
        imgTag.src = capricornFemaleOver30.photo;
        liTag.appendChild(imgTag);
        liTag.appendChild(liTagContent);
        listCapricornWomen.appendChild(liTag);
        return capricornFemaleOver30
    })
};

btnCapricornWomen.addEventListener("click", () => {
    main.querySelectorAll("ol *").forEach(n => n.remove());
    setCapricornWomen(randomPersonData);
});

/* Opdracht 3: Expired Credit Cards
Show: voornaam, achternaam, tel-nmbr, creditcard-nmbr, expire date
Only adults, sort by expire date, 
*/

const btnExpiringCards = document.querySelector("#btn-expiring-cards");

const setExpiringCards = (data) => {
    let now = new Date;
    let nowMonth = now.getMonth();
    let nowYear = now.getFullYear();
    const convertExpirationDate = data.filter(data => {
        const expiration = data.credit_card.expiration.split("/");
        const expirationYear = parseInt("20" + expiration[1]);
        const expirationMonth = parseInt(expiration[0] - 1);
        if (expirationYear === nowYear || 
            expirationYear <= nowYear + 1 && expirationMonth < nowMonth) {
                return data;
        };
    });
    return convertExpirationDate;
};

const setExpiringCardHolders = (data) => {
    const listExpiringCards = document.querySelector("#list-expiring-cards");
    data.map(person => {
        const liTag = document.createElement("li");
        const liTagContent = document.createTextNode(
            `First name: ${person.name},
            Last name: ${person.surname},
            Phone number: ${person.phone},
            Credit card number: ${person.credit_card.number},
            Expiration date: ${person.credit_card.expiration}`
        );
        liTag.appendChild(liTagContent);
        listExpiringCards.appendChild(liTag);
        return data;
    })
};

btnExpiringCards.addEventListener("click", () => {
    main.querySelectorAll("ol *").forEach(n => n.remove());
    setExpiringCardHolders(setExpiringCards(randomPersonData));
});

// Can't get the sorting to work... 
// const sortingExpiringDates = (data) => {
//     const sortedByExpiringDate = data.map(data => {
//         const expireDate = data.credit_card.expiration
//         const expiringMonth = parseInt(expireDate.split("/")[0]);
//         const expiringYear = parseInt(expireDate.split("/")[1]);
//         return expiringMonth, expiringYear;
//     }).sort()
//     return sortedByExpiringDate
// };
