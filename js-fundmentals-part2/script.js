"use strict";
/*
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = 'Audio';
// const private = 534;

// Functions

function logger() {
  console.log("My name is Nayra");
}

logger();
logger();

function fruitProcessor(apples, oranges) {
  let juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

let appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);

let appleOrangeJuice = fruitProcessor(3, 5);
console.log(appleOrangeJuice);


// Function declare=ation
let age1 = calAge1(2004);
console.log(age1);

function calAge1(birthyear) {
  return 2026 - birthyear;
}

// Function expression

let calAge2 = function (birthYear) {
  return 2026 - birthYear;
};

let age2 = calAge1(2004);
console.log(age2);

let calAge3 = (birthYear) => 2026 - birthYear;
let age3 = calAge3(2004);
console.log(age3);

let yearsUntilRetirement = (firstName, birthYear) => {
  let age = 2026 - birthYear;
  let ret = 65 - age;
  return `${firstName} retires in ${ret} years.`;
};

console.log(yearsUntilRetirement("Nayra", 2004));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  let applePieces = cutFruitPieces(apples);
  let orangePieces = cutFruitPieces(oranges);

  let juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(3, 2));



const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(2004, "Nayra"));

*/

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

function calcAverage(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

let avgDolhins = calcAverage(44, 23, 71);
console.log(avgDolhins);

let avgKoalas = calcAverage(65, 54, 49);
console.log(avgKoalas);

function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins >= avgKoalas * 2) {
    return `Dolhins win (${avgDolhins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= avgDolhins * 2) {
    return `Koalas win (${avgKoalas} vs. ${avgDolhins})`;
  } else {
    return "No one win.";
  }
}

console.log(checkWinner(avgDolhins, avgKoalas));
