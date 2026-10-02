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



// Arrays

let friends = ["Nabila", "Magy", "Soha"];
console.log(friends);

let y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[0] = "Jonas";
console.log(friends);

let firstName = "Nayra";
let nayra = [firstName, "Soliman", 2026 - 2004];
console.log(nayra);
console.log(nayra.length);

let calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};
let years = [1990, 1967, 2002, 2010, 2018];

let age1 = calcAge(years[0]);
let age2 = calcAge(years[1]);
let age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

let ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);



let friends = ["Nabila", "Magy", "Nayra"];

// Add Elements
let newLength = friends.push("Soha");
console.log(friends);
console.log(newLength);

friends.unshift("Waad");
console.log(friends);

//Remove Elements
friends.pop();
let popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

//
console.log(friends.indexOf("Magy"));
console.log(friends.indexOf("Nabila"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Magy"));
console.log(friends.includes("23"));

if (friends.includes("Nabila")) {
  console.log("You have a friend called Nabila.");
}

///////////////////////////////////////
// Coding Challenge #2


Steven is still building his tip calculator, using the same rules as before: 
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, 
the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out the 
code from first tip calculator challenge if you need to). Use the function type you like the most.
Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function 
you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 


let calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totals);

// Objects

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const nayra = {
  firstName: "Nayra",
  lastName: "Soliman",
  age: 2026 - 2004,
  job: "programmer",
  friends: ["Nabila", "Magy", "Nayra"],
};

console.log(nayra.lastName);
console.log(nayra["lastName"]);

const nameKey = "Name";
console.log(nayra["first" + nameKey]);
console.log(nayra["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Nayra? Choose between firstName, lastName, age, job, and friends",
);

if (nayra[interestedIn]) {
  console.log(nayra[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends",
  );
}

nayra.location = "Egypt";
nayra["TikTok"] = "nayrasoliman.04";
console.log(nayra);
console.log(
  `${nayra.firstName} has ${nayra.friends.length} friends, and her best friend is called ${nayra.friends[0]}`,
);


*/

// Object Methods

const nayra = {
  firstName: "Nayra",
  lastName: "Soliman",
  birthYeah: 2004,
  age: 2026 - 2004,
  job: "programmer",
  friends: ["Nabila", "Magy", "Nayra"],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${nayra.job}, and she has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(nayra.calcAge());

console.log(nayra.age);
