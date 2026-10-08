'use strict';

// Scoping in Practice
function calcAge(birthYear) {
  let age = 2026 - birthYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1997 && birthYear <= 2012) {
      var genZ = true;
      // Creating NEW variable with same name as outer scope's variable
      let firstName = 'Magy';
      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a gen Z, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      console.log(output); // NEW OUTPUT!
      console.log(genZ); // true
      // console.log(str); // ReferenceError: str is not defined
      // add(2, 3); // ReferenceError: add is not defined
    }
  }
  printAge();

  return age;
}

let firstName = 'Nayra';
calcAge(2004);

// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Nayra';
let job = 'Programmer';
const year = 2004;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
