"use strict";

/*
///////////////////////////////////////
// Default Parameters
let createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers,
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  let booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);
*/

/*
///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference

let flight = "LH234";
let nayra = {
  name: "Nayra Soliman",
  passport: 235567654321,
};

let checkIn = function (flightNum, passenger) {
  flightNum = "LH800";
  passenger.name = "Mrs. " + passenger.name;
  if (passenger.passport === 235567654321) {
    console.log("Checked In!");
  } else {
    console.log("Wrong Passport!");
  }
};

checkIn(flight, nayra);
console.log(flight, nayra);

let newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(nayra);
checkIn(flight, nayra);
*/

/*
///////////////////////////////////////
// Functions Accepting Callback Functions

let oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

let upperFirstWord = function (str) {
  let [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

let transformer = function (str, fn) {
  console.log("The Original String: ", str);
  console.log(`The Tranformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

// console.log(oneWord(" N ayra"));
transformer("nayra soliman mostafa", upperFirstWord);
transformer("nayra soliman mostafa", oneWord);

// JS uses callbacks all the time
let high5 = function () {
  console.log("👋");
};
document.body.addEventListener("click", high5);
["Jonas", "Martha", "Adam"].forEach(high5);

*/

/*
///////////////////////////////////////
// Functions Returning Functions

let greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

let greeter = greet("Hi");
greeter("Nayra");

greet("Hello")("Nayra");

let greetArr = (greeting) => (name) => console.log(`${greeting}, ${name}`);

greetArr("Hello")("Nayra");

*/

/*
///////////////////////////////////////
// The call and apply Methods
const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(635, "John Smith");

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, "Sarah Williams");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");

// Apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method

let bookEW = book.bind(eurowings, 23);
let bookLH = book.bind(lufthansa);
let bookLX = book.bind(swiss);

bookEW("Nayra");
bookLH(333, "Nabila");
bookLX(154, "Magy");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  // console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

*/

/*
///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)

(function runOnce() {
  console.log("run once");
  var isPrivate = 22;
})();

// console.log(isPrivate);

(() => console.log("run once arrow"))();

{
  console.log("run once");
  var isPrivate = 22;
}

console.log(isPrivate);

*/

/*
///////////////////////////////////////
// Closures

let secureBooking = function () {
  let countPassenger = 0;
  return function () {
    countPassenger++;
    console.log(`${countPassenger} passengers`);
  };
};

let booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);



///////////////////////////////////////
// More Closure Examples
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

*/
/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
