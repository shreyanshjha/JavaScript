// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// PROBLEM 1:
/* We work for a company building a smart home thermometer.
Our most recent task is this: "Given an array of temperature of one day,
calculate the temperature amplitude. Keep in mind that sometimes
there might be a sensor error."*/

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest
//  between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problem
// - How to ignore errors ?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps
// 1) Understanding the problem
// With 2 arrays, should we implement functionality

// 2) Breaking in sub-problems
// - Merge 2 arrays
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([9, 3, 5], [8, 4, 3]);
console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    //value: Number(prompt("Degrees celcius:")),
    value: 10,
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

// Use Debugging tool to solve
// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== "number") continue;
//     if (temps[i] > max) max = temps[i];
//     if (temps[i] < min) min = temps[i];
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);

/////////////////////////////////////////////////
// Coding Challenge

/*
Given an array of forecasted maximum temperatures, the
thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "
... 17degree C in 1 days 
... 21 degree C in 2 days .
.. 23 degree C in 3 days..."

Create a function 'printForecast' which takes in an array 'arr'
and logs a string like the above to the console.

Test data 1: [17, 21, 23]
Test data 2: [12, 5, -5, 0, 4]
*/

/*
Understanding the problems:
- Array transformed to string, separated by ...
- What is the X days? Answer index + 1

Breaking up into sub-problems
- Transform array into string
- Transform each element to string with degree C.
- Strings needs to contain day ( index + 1 ).
- Add ... between elements and start and end of string
*/
let a = [17, 21, 23];
let b = [12, 5, -5, 0, 4];
function printForecast(arr) {
  let str = "";
  for (let i = 0; i <= arr.length; i++) {
    str += ` ${arr[i]} degree C in ${i + 1} days...`;
  }
  console.log("..." + str);
}
printForecast(a);
