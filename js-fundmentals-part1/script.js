/*
let js = "fun";
// if (js == "fun") alert("JS is FUN");
console.log(10 + 20 + 30 - 22);

let firstName = "Nayra";
console.log(firstName);

let PI = 3.1415;
console.log(PI);

myFirstJob = "Programmer";
myCurrentJob = "Teacher";

console.log(myFirstJob);


let javascriptIsFun = false;

console.log(typeof false);
console.log(typeof javascriptIsFun);
console.log(typeof 22);
console.log(typeof "Nayra");

javascriptIsFun = "Yes";
console.log(typeof javascriptIsFun);

let year;
console.log(typeof year);
console.log(year);

console.log(typeof null);


let age = "ten";
age = "twenty";

const firstName = "Nayra";
// const lastName; // error
// firstName = "Ner"; //error

var job = "programmer";
job = "teacher";


// Maths Operators left to right
const now = 2026;
const ageNayra = now - 2004;
const ageJonas = now - 1991;
console.log(ageNayra, ageJonas);

console.log(ageNayra * 2, ageNayra / 10, 2 ** 3);

let firstName = "Nayra";
let lastName = "Soliman";
console.log(firstName + " " + lastName);

// Assignment Operators -> right to left
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

// Comparison Operator
const now = 2026;
const ageNayra = now - 2004;
const ageJonas = now - 1991;

console.log(ageJonas > ageNayra);
console.log(ageJonas < ageNayra);
console.log(ageNayra >= 22);

let isFullAge = ageNayra >= 22;
console.log(now - 1991 > now - 2004);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

let ageAverage = (ageJonas + ageNayra) / 2;
console.log(ageAverage);



// Challange 1:
let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

let markBoolean = markBMI > johnBMI;
console.log(markBoolean);


// Template Literals

let firstName = "Nayra";
let job = "Programmer";
let birthYear = 2004;
let currentYear = 2026;

let nayra =
  "I'am " + firstName + ", a " + (currentYear - birthYear) + " Years old!";
console.log(nayra);

let nayraNew = `I am ${firstName}, a ${currentYear - birthYear} years old!`;
console.log(nayraNew);

console.log(`Just a regular string ...`);

console.log("string with \n\ multiple \n\ lines");
console.log(`string with
  multiple 
  lines`);



const age = 15;

if (age >= 18) {
  console.log("You can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`You're too young, wait for another ${yearsLeft} years`);
}

// Challenge 2 :

let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

let markBoolean = markBMI > johnBMI;
if (markBMI > johnBMI) {
  console.log("Mark has a higher BMI");
} else {
  console.log("john has a higher BMI");
}



// type conversion
let year = "1991";
console.log(Number(year));
console.log(Number(year) + 10);

console.log(Number("Nayra"));
console.log(typeof NaN);

console.log(String(12));

// type coercion
console.log("I am " + 20);
console.log("70" - "10" - 20);
console.log("22" / "2");

let n = "1" + 1;
n -= 1;
console.log(n);

let z = 4 + 3 + 1 + "8";
console.log(z);


// 5 falsy value : 0, '', Nan, undefined, null

console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean({}));
console.log(Boolean("Nayra"));

const money = 0;
if (money) {
  console.log("Yes!");
} else {
  console.log("NO!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("UNDEFINEDDDDDD");
}


*/
