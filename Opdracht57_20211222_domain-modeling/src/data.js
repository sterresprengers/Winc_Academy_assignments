// import React from "react"
import { names } from "./names";

// Not including "to"
const getRandomInteger = (from, to) => from + Math.floor(Math.random() * to);

const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];

// Generate n items with func
const generateNItems = (num, func) => Array(num).fill(0).map(func);

const getRandomPerson = () => getRandomItem(names);

const getRandomFirstName = () => getRandomPerson().name;

const getRandomSurname = () => getRandomPerson().surname;

const getRandomId = () => getRandomInteger(1, 1000000);

const getRandomDomain = () =>
  getRandomItem([
    "gmail.com",
    "hotmail.com",
    "yahoo.com",
    "live.com",
    "mail.com",
    "me.com",
  ]);

const getRandomPhone = () => `06-${getRandomInteger(10000000, 10000000)}`;

const getRandomTime = () => getRandomInteger(8, 19);

const getRandomDay = () => getRandomInteger(1, 28);

const generatePerson = () => ({
  name: getRandomFirstName(),
  surname: getRandomSurname(),
  phone: getRandomPhone(),
  id: getRandomId(),
});

const namesToEmailPart = ({ name, surname }) =>
  `${name.toLowerCase()}.${surname.toLowerCase()}`.replace(" ", "");

const formatEmployeeEmail = ({ name, surname }) =>
  namesToEmailPart({ name, surname }) + `@tandartspraktijkbvt.nl`;

const generateEmployee = () => {
  const person = generatePerson();
  return { ...person, ...{ email: formatEmployeeEmail(person) } };
};

const generatePatient = () => {
  const person = generatePerson();
  return {
    ...person,
    ...{
      email: namesToEmailPart(person) + getRandomDomain(),
      birthYear: getRandomInteger(1935, 2020),
    },
  };
};

const generateRandomAppointment = ({ dentists, assistants, patients }) => {
  const appointment = {
    id: getRandomId(),
    dentist: getRandomItem(dentists).id,
    patient: getRandomItem(patients).id,
    day: getRandomDay(),
    time: getRandomTime(),
  };

  if (getRandomInteger(0, 2) === 1)
    appointment.assistant = getRandomItem(assistants).id;

  return appointment;
};

const generateRandomAppointments = (people, num_appointments) =>
  generateNItems(num_appointments, () => generateRandomAppointment(people));

const getInitialState = (props) => {
  console.log("props given to getInitialState", props)
  const NUM_DENTISTS = 4;
  const NUM_ASSISTANTS = 2;
  const NUM_PATIENTS = 50;
  const NUM_APPOINTMENTS = 10;
  const people = {
    dentists: generateNItems(NUM_DENTISTS, generateEmployee),
    patients: generateNItems(NUM_PATIENTS, generatePatient),
    assistants: generateNItems(NUM_ASSISTANTS, generateEmployee),
  };
  const appointments = generateRandomAppointments(people, NUM_APPOINTMENTS);
  return { ...people, ...{ appointments } };
};

export default { getInitialState };

// const getRandomName = () => {
//   const person = names[Math.floor(Math.random() * 250)];
//   return `${person.name} ${person.surname}`;
// };

// const getRandomTime = () => {
//   let hour;
//   while (true) {
//     hour = Math.floor(Math.random() * 24);
//     if (hour > 7 && hour < 19) {
//       return hour;
//     }
//   }
// };

// const getRandomDay = () => Math.floor(Math.random() * 28) + 1;

// const generateRandomAppointment = () => ({
//   day: getRandomDay(),
//   time: getRandomTime(),
//   patient: getRandomName(),
//   dentist: getRandomName(),
//   assistant: getRandomName(),
// });

// const generateRandomAppointments = num =>
//   Array(num)
//     .fill(0)
//     .map(_ => generateRandomAppointment());

// export default generateRandomAppointments;
