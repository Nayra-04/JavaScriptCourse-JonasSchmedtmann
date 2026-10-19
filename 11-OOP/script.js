'use strict';

/*

///////////////////////////////////////
// Constructor Functions and the new Operator

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

let nayra = new Person('Nayra', 2004);
console.log(nayra);

let magy = new Person('Magy', 2003);
console.log(magy);

console.log(nayra instanceof Person);

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};
Person.hey();

///////////////////////////////////////
// Prototypes

Person.prototype.calcAge = function () {
  console.log(2026 - this.birthYear);
};

nayra.calcAge();
magy.calcAge();

console.log(nayra.__proto__);
console.log(nayra.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(nayra));
console.log(Person.prototype.isPrototypeOf(magy));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(nayra.species);

console.log(nayra.hasOwnProperty('firstName'));
console.log(nayra.hasOwnProperty('species'));

///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(nayra.__proto__);
// Object.prototype (top of prototype chain)
console.log(nayra.__proto__.__proto__);
console.log(nayra.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
*/

///////////////////////////////////////
// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2027 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

let nayra = new PersonCl('Nayra Soliman', 2004);
console.log(nayra);
nayra.greet();
console.log(nayra.age);

console.log(nayra.__proto__ === PersonCl.prototype);

const walter = new PersonCl('Walter White', 1965);
console.log(walter);

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

///////////////////////////////////////
// Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

PersonCl.hey();
