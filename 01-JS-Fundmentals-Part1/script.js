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



let favourite = Number(prompt("Enter your favourite number: "));
if (favourite === 22) {
  console.log("Cool! 22 is a cool number.");
} else if (favourite === 7) {
  console.log("7 is also a cool number.");
} else {
  console.log("Number isn't 22 or 7");
}

if (favourite !== 22) console.log("Why not 22?");


// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 



// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy");
}



// Switch statement

let day = "tueday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend!");
    break;
  default:
    console.log("Thats not a valid day");
}


// Ternary operator
let age = 15;
let canDrive = age >= 18 ? "you can drive" : "you cant drive";
console.log(canDrive);

// Coding Challenge #4


Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 

GOOD LUCK 



const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

*/
