'use strict';

//const { isLabeledStatement } = require("typescript");

//let hasDriversLicense = false;
//const passTest = true;

//if (passTest) hasDriversLicense = true;
//if (hasDriversLicense) console.log("I can drive");

//const interface = 'Audio';
//const private = 534;

// Functions
// function logger() {
//     console.log("My name is Jonas");
// }

// logger(); // calling / running / invoking function
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

/**
 * main difference in function declaration and function expression 
 * is that in function declaration we can call function before function declare
 * but in function expression first we have to declare the function then after call the function
 */
// Function declaration
// function calcAge1(birthYeah) {
//     return 2037 - birthYeah;
// }

// const age1 = calcAge1(1991);

// // Function expression
// const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// Arrow function
// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991); 
// console.log(age3);

// const yearsUntilRetirement = (birthYeah, firstName) => {
//     const age = 2037 - birthYeah;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// Functions calling other functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangeieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} piece apples and ${orangeieces} pieces oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYeah) {
//     return 2037 - birthYeah;
// }
// const yearsUntilRetirement = function (birthYeah, firstName) {
//     const age = calcAge(birthYeah);
//     const retirement = 65 - age;
//     if(retirement > 0){
//         return retirement;
//     } else {
//         return -1;
//     }
    
//     //return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Bob'));

/*
    Code challenge (Functions):-

    Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics 
    discipline, which works differently.

    Each team competes 3 times, and then the average of the 3 scores is 
    calculated (so one average score per team).

    A team only wins if it has at least double the average score of the other team. 
    Otherwise, no team wins!

    Your tasks:
    Create an arrow function calcAverage to calculate the average of 3 scores. 
    This function should have three parameters and return a single number (the average score).

    Create two new variables — scoreDolphins and scoreKoalas, 
    and assign the value returned from the calcAverage function to them 
    (you will need to call this function, and pass scores as arguments).

    Create a function checkWinner that takes the average score of each team 
    as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, 
    together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) 
    (use avgDolphins and avgKoalas instead of hard-coded values).

    Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

    Ignore draws this time. Instead, log No team wins... to the console if there is no winner.
    TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
    TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins > (avgKoalas * 2)) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas > (avgDolphins * 2)) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log("No team wins...");
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// Arrays *****

/*const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2000, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991,
'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);*/

// Basic Array Operations *******************
//const friends = ['Michael', 'Steven', 'Peter'];
// Add elements
// const newLength = friends.push('Jay'); //Add elements in the end of the array
// console.log(friends);
// console.log(newLength);
// friends.unshift('John');// Add elements in the begining of the array
// console.log(friends);

// Remove elements
// const popped = friends.pop(); // Remove last element in the array
// console.log(popped);
// console.log(friends);

// friends.shift();// Remove first/from begining element in the array
// console.log(friends);

// console.log("indexOf",friends.indexOf('Steven'));
// console.log("indexOf",friends.indexOf('Bob'));
// friends.push(23);
// console.log("includes",friends.includes('Steven'));
// console.log("includes",friends.includes('Bob'));
// console.log("includes",friends.includes('23')); // includes has strict equallity check "==="

// if (friends.includes('Steven')) {
//     console.log("You have a friend called Steven");
// }

// Coding challenge ******* %%%% ************ %%%% *******
/*
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is 
between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

1. Write a function calcTip that takes any bill value as an input and returns the 
corresponding tip, calculated based on the rules above (you can check out the code 
from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

2. And now let's use arrays! So, create an array called bills containing the test data below.

3. Create an array called tips containing the tip value for each bill, 
calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/
// function calcTip(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(bills, tips);

// const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];

// console.log(totals);

/* %%%%%% Objects %%%%%% */
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtman',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);
// Good example that why [] is use for retriving the data from object
// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

jonas.location = 'Vadodara';
jonas['twitter'] = '@shreyanshjha';
console.log(jonas);

// Challenge
// Jonas has 3 friends, and his best friend is called Michael
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

const shreyansh = {
    firstName: 'Shreyansh',
    lastName: 'Jha',
    birthYear:  1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    // calcAge: function () {
    //     return 2037 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

console.log(shreyansh.calcAge());

console.log(shreyansh.age);
console.log(shreyansh.age);
console.log(shreyansh.age);

// Challenge
// "Shreyansh is a 46-year old teacher, and he has a/no 
//  driver's license"

console.log(shreyansh.getSummary());

/*vCHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! 
Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

1: For each of them, create an object with properties for their full name, mass, and height 
(Mark Miller and John Smith). Name these objects as mark and john, and their properties 
exactly as fullName, mass and height.

2: Create a calcBMI method on each object to calculate the BMI (the same method on both objects). 
Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

3: Log to the console who has the higher BMI, together with the full name and the respective 
BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.
*/
/* Write your code below. Good luck! 🙂 */

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }
// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// if(mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.bmi})`);
// }

// ***** Iteration: The For Loop ***************///
///////////////////////////////////////////////////////////
// for loop keeps running while condition is TRUE
// for(let resp = 1; resp <= 10; i++){
//     console.log(`Lifting weights repetition ${i}`);
// }
// const jonasArray = [
//     'Jonas',
//     'Schmedtman',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ]; 

// const types = [];

//console.log(jonasArray[0]);
//console.log(jonasArray[1]);
//...
//console.log(jonasArray[4]);
//jonasArray[5] does NOT exist;
// for(let i = 0;i < jonasArray.length; i++) {
//     // Reading from jonas array
//     console.log(jonasArray[i], typeof jonasArray[i]);

//     // Filling types array
//     //types[i] = typeof jonasArray[i];
//     types.push(typeof jonasArray[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// // Continue and break
// console.log('----ONLY STRING----');
// for(let i = 0;i < jonasArray.length; i++) {
//     if(typeof jonasArray[i] !== 'string')continue;
//     console.log(jonasArray[i], typeof jonasArray[i]);
// }

// console.log('----BREAK WITH NUMBER----');
// for(let i = 0;i < jonasArray.length; i++) {
//     if(typeof jonasArray[i] === 'number')break;
//     console.log(jonasArray[i], typeof jonasArray[i]);
// }


// const jonasArray = [
//     'Jonas',
//     'Schmedtman',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ]; 
// 5, 4, 3, ...., 0
// for(let i = jonasArray.length - 1; i >= 0; i--){
//     console.log(i, jonasArray[i]);
// }

// for(let exercise = 1; exercise < 4; exercise++) {
//     console.log(`---------Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`${exercise} Lifting weight repetition ${rep}`);
//     }
// }

// ***************** %%%%%%%%%%% **************** //
///////////////// While Loop ///////////////////////
// let rep = 1;
// while(rep <= 10) {
//     console.log(`Lifting weight repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6) console.log('Loop is about to end...');
// }

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for(let i = 0; i < bills.length; i++) {
    // output is correct but didn't passed test case
    //tips.push(this.calcTip(bills[i]));
    //totals.push(bills[i] + tips[i]);
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(tips);
console.log(totals);

function calcAverage(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        //sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));