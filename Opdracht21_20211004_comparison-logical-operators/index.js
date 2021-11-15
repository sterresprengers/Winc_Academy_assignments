const age = 19;
const isFemale = true;
const driverStatus = 'Bob';
const firstName = 'Sterre';
const totalAmount = 80;

if (age >= 18 && age <= 25) {
  console.log('You get a 50% discount');
} if (age > 25) {
  console.log('You may enter the pub');
} else {
  console.log('You cannot enter the pub');
}

if (isFemale) {
  console.log('Welcome to Ladies Night!');
} else {
  console.log('Youre not welcome tonight');
}

if (driverStatus === 'Bob') {
  console.log('Please drive your friends home');
} else {
  console.log('Ask a friend to drive you home');
}

if (firstName === 'Bram' || firstName === 'Sarah') {
  console.log('Surprise! You get a free beer')
} else {
  console.log('No free beer for you, but still: lets celebrate!');
}

if (totalAmount > 25 && totalAmount < 50) {
  console.log('One portion of free snacks!')
} else if (totalAmount >= 50 && totalAmount < 100) {
  console.log('Free nachos for you!');
} else if (totalAmount >= 100) {
  console.log('You unlocked a bottle of champagne');
} else {
  console.log('Keep on spending to unlock free gifts');
}