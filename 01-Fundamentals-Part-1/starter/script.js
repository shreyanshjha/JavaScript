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