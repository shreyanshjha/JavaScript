'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
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
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // ES6 enhanced object literals//
  openingHours,

  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and
      ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPassta(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with  ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, 
we have a map with a log of the events that happened
during the game. The values are the events themselves, 
and the keys are the minutes in which each event 
happened (a football game has 90 minutes plus some 
extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
//1
const events = [...new Set(gameEvents.values())];
console.log(events);
//2
gameEvents.delete(64);
console.log(gameEvents);
//3
console.log(`An event happened, on average, 
  every ${90 / gameEvents.size} minutes`);
const time = [...gameEvents.keys()].pop();
console.log(`An event happened, on average, 
  every ${time / gameEvents.size} minutes`);
//4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
//////////////////////////////////////////////////////////
// Maps: Iterate
/*
const questions = new Map([
  [ 'question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!']
]);
console.log(questions);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(questions.get('question'));
for(const [key, value] of questions) {
  if(typeof key === 'number') console.log(`${key}: ${value}`);
}
//const ans = Number(prompt('Your answer'));
const ans = 3;
console.log(questions.get(ans === questions.get('correct')));

// Convert map to array
console.log([...questions]);
console.log([...questions.keys()]);
console.log([...questions.values()]);
*/
///////////////////////////////////////////////// 
// MAPS: Fudamentals
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 
  'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

  console.log(rest.get('name'));
  console.log(rest.get(true));

  const time = 8;
  console.log(rest.get(time > rest.get('open') && 
  time < rest.get('close')));

  console.log(rest.has('categories'));
  rest.delete(2);
  console.log(rest);
  console.log(rest.size);
  //rest.clear()
  const arr = [1, 2];
  rest.set(arr, 'Test');
  rest.set(document.querySelector('h1'), 'Heading');
  console.log(rest.get(arr));
  console.log(rest);
*/
/////////////////////////////////////////////////
// SETS
/*
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);
console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
//orderSet.clear();
console.log(orderSet);
for(const order of orderSet) {
  console.log(order);
}
//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 
  'Chef', 'Waiter'];
 const staffUnique = [...new Set(staff)];
 console.log(staffUnique);
 console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 
  'Chef', 'Waiter']).size);
console.log(new Set('shreyanshjha').size);
*/
/*
///////////////////////////////////////////////////
// Looing objects: Object keys, values, and entries
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for(const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr);
// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
//console.log(entries);

for(const [key, {open, close}] of entries) {
  console.log(`On the ${key} we open at ${open} and close at ${close}`);
}*/
/*
///////////////////////////////////////////////////////
// Optional chaining
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open =restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
// Methods
console.log(restaurant.order?.(0,1) ?? `Method does not exist`);

console.log(restaurant.orderRisoto?.(0,1) ?? `Method does not exist`);

// Arrays
const users = [
  // {
  //   name: 'Jonas',
  //   email: 'hello@jonas',
  // }
];
console.log(users[0]?.name ?? 'User array empty');
*/
/*
const menu = [...restaurant.starterMenu, 
  ...restaurant.mainMenu];
  console.log(menu);
for(const item of menu) console.log("item",item);

for(const [i, el] of menu.entries()){
  console.log(i+1 +' '+ el);
}*/
//console.log(...menu.entries());
/*
// 1) Destructuring
// Spread operator, on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, beacause on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , ri, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, ri, otherFood);

//Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Functions
const add = function(...numbers) {
  let sum = 0;
  for(let i = 0; i<numbers.length; i++) sum += numbers[i];
  console.log(sum);
}

add(2, 3);
add(5,3,7,2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 4, 5];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
*/
/////////////////////////////////////////////////
/* The Spread Operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); // is same like 
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu]; //Shallow copy

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S. '];
console.log(letters); 
console.log(...str);

// Real world example
const ingredients = [
//   prompt("Let\'s make pasta! Ingredient 1 ?"), 
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?')
];
console.log(ingredients);

restaurant.orderPassta(ingredients[0], ingredients[1], ingredients[2]);

restaurant.orderPassta(...ingredients);

// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/


/****************
 * ******** Destructuring Objects
 * **************
 */
// Advance
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});


// Basic
const {name, openingHours, categories} = restaurant;

console.log(name, openingHours, categories);

const { name: restaurantName, 
  openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables

let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

({a, b} = obj);

console.log(a, b);

// Nested objects
const { fri: {open: o, close: c} } = openingHours;
console.log( o, c );
*/
/* ***************************
******************************
// Destructuring Arrays Lesson
const arr = [2, 3, 4];
const [x , y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

// Switiching variables
// const temp = main;
// main = secondary;
// secondary = main;

// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function 
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 3, [5, 6]];
// const [i , , j] = nested;
// console.log(i, j);
const [i, , [j , k]] = nested;
console.log(i , j, k);

// Default values
const[p = 1 , q = 1, r = 1] = [8 , 9];
console.log(p, q, r);
*/


// --------------------------------------------------------------------------------------------------
// Assignments
const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    },
    highlighted: true
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0
      }
    },
    highlighted: true
  },
  {
    title: 'Computer Systems: A Programmer\'s Perspective',
    author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16
      }
    },
    highlighted: true
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65
      }
    }
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6
      }
    },
    highlighted: true
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090
      }
    }
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0
      }
    }
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808
      }
    },
    highlighted: true
  }
];

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team 
  (variables 'players1' and 'players2')
2. The first player in any player array is 
  the goalkeeper and the others are field players. 
  For Bayern Munich (team 1) create one variable 
  ('gk') with the goalkeeper's name, and one array 
  ('fieldPlayers') with all the remaining 10 field 
  players
3. Create an array 'allPlayers' containing all 
  players of both teams (22 players)
4. During the game, Bayern Munich (team 1) 
  used 3 substitute players. So create a 
  new array ('players1Final') containing all 
  the original team1 players plus 'Thiago', 'Coutinho' 
  and 'Perisic'
5. Based on the game.odds object, create one 
  variable for each odd (called 'team1', 'draw' and 
  'team2')
6. Write a function ('printGoals') that receives 
  an arbitrary number of player names (NOT an array) 
  and prints each of them to the console, along with 
  the number of goals that were scored in total (number 
  of player names passed in)
7. The team with the lower odd is more likely to win. 
  Print to the console which team is more likely to win, 
  WITHOUT using an if/else statement or the ternary 
  operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 
'Lewandowski' and 'Kimmich'. Then, call the function 
again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds : {
    team1: 1.33,
    x: 3.25, // draw
    team2: 6.5
  }
};
/*
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2. Rest syntax
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5.
const  {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function(...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
// 1
/*for(const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i+1}: ${player}`);
};
// 2 
let avg = 0;
for (const odd of Object.values(game.odds)) {
  avg += odd;
}
avg = avg / Object.values(game.odds).length;
console.log(avg);
// 3
for(const [key, values] of Object.entries(game.odds)) {
  const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`; 
  console.log(`Odd of ${teamStr}: ${values}`);
};
// 4
let scorers = {};

for(const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
*/
/*
const rest1 = {
  name: 'Capri',
  //numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (nullish means null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
//rest1.owner = rest1.owner && '<ANONYMOUS>';
//rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/
/*
///////////////////////////////////////////////
// Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);
// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
/*
console.log("---------- OR ----------");
// Use ANY data type, return ANY data type, 
// short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || null || 0 || ''
  || 'Hello' || 23 || null
);
//restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("---------- AND ----------");
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

if(restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/
// Destructure Array
/*const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);

const [ , , thirdBook] = books;
console.log(thirdBook);

const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

const [fiveStarRatings = 0, oneStarRatings = 0, threeStarRatings = 0] = [63405, 1808];
console.log(fiveStarRatings, oneStarRatings, threeStarRatings);*/

// Destructure Object
/*const { title, author, ISBN} = books[0];
console.log(title, author, ISBN);

const {keywords: tags} = books[0];
console.log(tags);

const {language, programmingLanguage = 'unknown'} = books[6];
console.log(language, programmingLanguage);

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({title: bookTitle, author: bookAuthor} = books[0]);
console.log(bookTitle, bookAuthor);

const {thirdParty: {goodreads: {rating: bookRating}}} = books[0];
console.log(bookRating);*/

/////////// The spread opreator ///////////
/*const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

function spellWord(data = 'JavaScript') {
  console.log(...data);
}
spellWord();*/


// REST Assignements
/*const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

const {publisher: bookPublisher, ...restOfTheBook} = books[1];
console.log(bookPublisher, restOfTheBook);

function printBookAuthorsCount(title, ...authors) {
 console.log(`The book ${title} has ${authors.length} authors`);
}

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');*/