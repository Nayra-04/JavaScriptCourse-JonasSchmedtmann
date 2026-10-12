'use strict';

let weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

let openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 0,
    mainIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(
      `order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to ${address} at ${time}`,
    );
  },

  openingHours,

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`,
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Looping Objects: Object Keys, Values, and Entries

// Property NAMES
// let properties = Object.keys(openingHours);
// let str = `We are open on ${properties.length} days: `;
// for (let day of properties) str += `${day}, `;
// console.log(str);

// Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// Optional Chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);  // Error
// console.log(restaurant.openingHours.mon?.open); // Undefined

// Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
// let users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// let users = [];
// console.log(users[0]?.name ?? 'User array empty');
// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

// The for-of Loop
// let menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (let item of menu) console.log(item);

// for (let [i, item] of menu.entries()) console.log(`${i + 1}: ${item}`);

// for (let item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`);

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// let [players1, players2] = game.players;
// console.log(players1, players2);

// let [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// let allPlayers = [...players1, players2];
// console.log(allPlayers);

// let players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// let {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// function printGoals(...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// }

// printGoals(...game.scored);

// team1 < team2 && console.log('Team2 is the winner');
// team1 > team2 && console.log('Team1 is the winner');

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;
// OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<anonymous>';
// rest2.owner = rest2.owner && '<anonymous>';

// rest1.owner &&= '<anonymous>';
// rest2.owner &&= '<anonymous>';

// console.log(rest2);
// console.log(rest1);

// The Nullish Coalescing Operator
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// Short Circuiting (&& and ||)

// console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas');

// Rest Pattern and Parameters
// 1) Destructuring

// SPREAD, because on RIGHT side of =
// let arr = [1, 2, ...[3, 5]];
// console.log(arr);

// REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// Functions
// let add = function (...numbers) {
//   let s = 0;
//   for (let i = 0; i < numbers.length; i++) s += numbers[i];
//   console.log(s);
// };

// add(3, 5);
// add(3, 5, 2);

// let x = [1, 2, 3];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

//////////////

// let arr = [1, 3, 5];
// let newBadArr = [4, 9, arr[0], arr[1], arr[2]];

// let newArr = [4, 3, ...arr];
// console.log(newArr);

// let menuArr = [...restaurant.mainMenu, 'Gnocci'];
// console.log(menuArr);

// let menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
// let str = 'Nayra';
// let letters = [...str, ' ', 's'];
// console.log(letters);
// console.log(...str);
// console.log(`${...str} nayra`);

// const ingredients = [
// prompt("Let's make pasta! Ingredient 1?"),
// prompt('Ingredient 2?'),
// prompt('Ingredient 3'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// Destructuring Objects

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// Destructuring Arrays
// let arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// let [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [first, , second] = restaurant.categories;
// console.log(first, second);

//switching variables
// let temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// [first, second] = [second, first];
// console.log(first, second);

// let [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// let nested = [2, 4, [5, 6]];
// let [i, , j] = nested;
// let [i, , [j, k]] = nested;
// console.log(i, j, k);

// let [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// Destructuring Objects

// let { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// let {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// Default values
// let { menu = [], starterMenu = [] } = restaurant;
// console.log(menu, starterMenu);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
