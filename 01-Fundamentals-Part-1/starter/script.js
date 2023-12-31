/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("SSJ");
console.log(23);

// Legal
let firstName = "Shreyansh";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_malinda = "JM";
let $function = 27;

let person = "Jonas";
let PI = 3.1245;
//Valid naming convention
let myFirstJob = "Programmer";
let myCurrentJob = "SDE";
//invalid naming 
let job1 = "Programmer";
let job2 = "Associated"

// Invalid in JavaScript
//let jonas&malinda = "Jonas";
//let new = "newData" //new is the keyword in javascript
*/

/*
let jamesData = 'Data 123';
console.log(typeof jamesData);

let numberType = 23;
console.log(typeof numberType);

// Dynamic Typing
numberType = 'Dynamic Type';
console.log(typeof numberType);
jamesData = true;
console.log(typeof jamesData);

let year;
console.log(typeof year);

console.log(typeof null);
*/

// let, const and var

/*let age = 42;
age = 42;

const birthYear = 1995;
//birthYear = 1990; //Error: Can't re-assign the value to const variable
//const job; 

var program = "programmer";
program = "Coder";

lastName = "Jha";
console.log(lastName);*/

// Basic operators
// Math operators
// const now = 2037
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + " " + lastName);

// Assignment operators
// let x = 10 + 5; //15
// x += 10; //x = x + 10 = 25
// x *= 4; //x = x * 4 = 100
// x++; // x = x + 1
// x--; // x = x - 1
// console.log(x);

// Comparison operators
// console.log(ageJonas > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);

// let a, b;
// a = b = 25 - 10 -5; //a = b = 10, a = 10
// console.log(a, b);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

/**
 * Strings and Template Literals
 */
// const firstName = 'Shreyansh';
// const job = 'SDE';
// const birthYear = 2000;
// const year = 2022;
// const shreyansh = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(shreyansh);
// Template Literals
// const shreyanshNew = `I'm ${firstName} a ${year - birthYear} year old ${job}!`;
// console.log(shreyanshNew);

// console.log(`String
// Multiple
// lines`);

// if/else statements
// const age = 15;

// if(age >= 18){
//     console.log(`Shreyansh can start driving license 🚗`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Shreyansh is too young. Wait another ${yearsLeft} years 🚗`);
// }

// const birthYear = 2012;
// let century;
// if(birthYear <= 2000){
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

/**
 * coding challenge
 */

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// if(BMIMark > BMIJohn){
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

/**
 * Type conversion
 */
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

/**
 * Type coercion
 */
// console.log(`I am` + 23 + `years old`);
// console.log(`I am` + `23` + `years old`); // both are same

// console.log('23' - '10' + 3); // converted in numbers
// console.log('23' / '2');

// let n = '1' + 1; // 11 here plus opertor converte in string
// n = n - 1; // 11 - 1 here minus opertor converte in number
// console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if(money){
//     console.log("Don't spend it all")
// } else {
//     console.log('You should get a job!')
// }

// let height = 0;
// if(height){
//     console.log("YAY! Height is defined");
// } else {
//     console.log("Height is Undefined");
// }

// Equality operators == and ===
// const age = '18';
// // strict equality operators don't do type coercion
// if(age === 18) console.log('You just became an adult (===)');

// // loose equality operators do type coercion
// if(age == 18) console.log('You just became an adult (==)');

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// if(favorite === 23){ 
//     console.log("Cool! 23 is an amazing number!");
// } else if (favorite === 7) {
//     console.log("7 is also a cool number");
// } else if (favorite === 9) {
//     console.log("9 is also a cool number");
// } else {
//     console.log("Number is not 23 or 7 or 9");
// }

// if(favorite !== 23) console.log("Why not 23?");

// Basic Boolean Logic: The AND OR & NOT operators

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive){
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired){
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

// Coding challenge
/*
Your tasks:

1. Calculate the average score for each team, using the test data included below. 
   The average score for Dolphins should be assigned to the scoreDolphins variable, 
   and the average score of Koalas should be assigned to the scoreKoalas variable.
2. Compare the team's average scores to determine the winner of the competition, 
   and print to the console:

"Dolphins win the trophy" if Dolphins win, or
"Koalas win the trophy" if Koalas win, or
"Both win the trophy" if their average scores are equal.
TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
*/ 
// const scoreDolphins = (96+108+89)/3;
// const scoreKoalas = (88+91+110)/3;

// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins) {
//     console.log("Koalas win the trophy");
// } else if(scoreKoalas === scoreDolphins){
//     console.log("Both win the trophy");
// }

// Bonus 1
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);
// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log("Koalas win the trophy");
// } else if(scoreKoalas === scoreDolphins && scoreKoalas >= 100 && scoreDolphins >= 100){
//     console.log("Both win the trophy");
// } else {
//     console.log("No one wins the trophy");
// }

// Switch Statements
// const day = 'tuesday';
// switch(day) {
//     case 'monday':
//         console.log("Pan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case 'tuesday':
//         console.log("Prepare theory videos");
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log("Write code examples");
//         break;
//     case 'friday':
//         console.log("Record videos");
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log("Enjoy the weekend :D");
//         break;
//     default:
//         console.log("Not a valid day!");
// }

// same code with if-else
// if(day === 'monday') {
//     console.log("Pan course structure");
//     console.log("Go to coding meetup");
// } else if (day === 'tuesday') {
//     console.log("Prepare theory videos");
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log("Write code examples");
// } else if (day === 'friday') {
//     console.log("Record videos");
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log("Enjoy the weekend :D");
// } else {
//     console.log("Not a valid day!");
// }

// The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log("I like to drink wine") : 
// console.log("I like to drink water");

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine': 'water'}`);

/**
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. 
In his country, it's usual to tip 15% if the bill value is between 50 and 300. 
If the value is different, the tip is 20%.

Your tasks:
Calculate the tip, depending on the bill value. Create a variable called tip for this. 
It's not allowed to use an if...else statement (if it's easier for you, you can start with an 
if...else statement, and then try to convert it to a ternary operator).
Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.
*/
const bill = 275;

const tip = bill >=50 && bill <=300 ? bill * (15/100) : bill * (20/100);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`);
