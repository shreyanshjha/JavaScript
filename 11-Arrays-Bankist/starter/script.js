'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



function displayMovements(movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}
let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})

function updateUI(acc) {
   // Display movements
   displayMovements(acc.movements);
   // Display balance
   calcPrintBalance(acc);
   // Display summary
   calcDisplaySummary(acc);
}

function createUserNames(accs) {
  accs.forEach((acc) => {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(word => word[0])
    .join('');
  });
}
createUserNames(accounts);

function calcPrintBalance(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => {
    return acc + mov
  }, 0);
  labelBalance.textContent = `${acc.balance} €`;
}

function calcDisplaySummary(account) {
  const income = account.movements.filter(mov => mov > 0).reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${income}€`;

  const outgoing = account.movements.filter(mov => mov < 0).reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(outgoing)}€`;

  const interest = account.movements.filter(mov => mov > 0)
    .map(deposit => deposit * 1.2/100)
    .filter(dep => dep >= 1)
    .reduce((acc, cur) => acc + cur, 0);
  
  labelSumInterest.textContent = `${interest}€`;
}

let currentAccount;
btnLogin.addEventListener('click', function(e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if(currentAccount.pin === Number(inputLoginPin.value)) {
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;
   
    // Update UI:- display movements, balance, summary
    updateUI(currentAccount);
  }
});
btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  if(amount > 0 && receiverAcc && currentAccount.balance >= amount
    && receiverAcc?.username !== currentAccount.username) {
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);

      // Update UI:- display movements, balance, summary
      updateUI(currentAccount);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});

btnClose.addEventListener('click', function(e) {
  e.preventDefault();
  if(currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  // Clear input fields
  inputCloseUsername.value = inputClosePin.value = "";
});

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Update UI:- display movements, balance, summary
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});
////////////////////////////////////////////////////
// Array Methods Practice

// 1.
//const bankDepositsSum = accounts.map(acc => acc.movements).flat();
// const bankDepositsSum = accounts.flatMap(acc => acc.movements)
// .filter(mov => mov > 0)
// .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositsSum);

// 2.
// const numDeposits1000 = accounts.flatMap(acc => acc.movements)
// .filter(m => m >= 1000).length;
//console.log(numDeposits1000);
// const numDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => {
//   return mov >= 1000 ? ++acc : acc;
// }, 0);
// console.log(numDeposits1000);

// 3.
// const sum = accounts.flatMap(acc => acc.movements).reduce((acc, cur) => {
//   //cur > 0 ? acc.deposits += cur : acc.withdrawals += Math.abs(cur);
//   acc[cur > 0 ? 'deposits' : 'withdrawals'] += Math.abs(cur);
//   return acc;
// }, { deposits: 0, withdrawals: 0});
// console.log(sum);

// 4.
// this is a nice title => This Is a Nice Title
// function convertTitleCase(title) {
//   function capitalize(str) {
//     return str[0].toUpperCase() + str.slice(1)
//   }
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const titleCase = title.toLowerCase().split(' ')
//   .map(word => exceptions.includes(word) ? word : capitalize(word))
//   .join(' ');
//   return capitalize(titleCase);
// }
// console.log(convertTitleCase("this is a nice title"));
// console.log(convertTitleCase("this is a LONG title but not too good"));
// console.log(convertTitleCase("and here is another title with an EXAMPLE"));

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too 
much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, 
and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% 
below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended 
  food portion and add it to the object as a new property. Do NOT create a new array, simply 
  loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams 
  of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. 
  HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, 
  and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an 
   array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and 
   Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is 
   recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse 
   the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an 
   ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to 
choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion 
means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current 
portion should be between 90% and 110% of the recommended portion.

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1.
dogs.forEach((dog) => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);
// 2.
//const sarahDog = dogs.find(dog => dog.owners.some(d => d === 'Sarah'));
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);
// 3.
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood)
                          .flatMap(d => d.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood)
                          .flatMap(d => d.owners);;
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
// 5.
const data1 = dogs.some(dog => dog.curFood === dog.recommendedFood);
console.log(data1);

// 6.
function okayAmountOfFood(dog) {
  return dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10)
};
console.log(dogs.some( dog => okayAmountOfFood(dog)));
// above line is equivalent to console.log(dogs.some(okayAmountOfFood));

// 7.
const newDogsArray = dogs.filter((dog) => {
   return okayAmountOfFood(dog);;
});
console.log(newDogsArray);

// 8.
const dogsShallowCopyShort = dogs.slice().sort((a , b) => {
  if(a.recommendedFood > b.recommendedFood) return 1;
  if(a.recommendedFood < b.recommendedFood) return -1;
});
console.log(dogsShallowCopyShort);

////////////////////////////////////////////////////
// Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);
// Numbers
//console.log(movements);

// return < 0 A, B (keep order)
// return > 0 B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   console.log(`Comparing ${a} and ${b}`);
//   if(a > b) return 1;
//   if(a < b) return -1;
// });
//movements.sort(a, b => a - b);
// console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if(a > b) return -1;
//   if(a > b) return 1;
// });
//movements.sort(a, b => b - a);
// console.log(movements);

// Empty arrays + fill method
// const arr = new Array(7);
// arr.fill(1);
// console.log(arr);
// arr.fill(2, 4, 6);
// console.log(arr);
// console.log(" //////////// Array From /////////// ");
// const d = Array.from({length: 7}, () => 1);
// console.log(d);
// const z = Array.from({length: 7}, (curr, i) => i+1);
// console.log(z);

// labelBalance.addEventListener('click', function() {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace("€", ""))
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
//   console.log(movementsUI2);
// })

////////////////////////////////////////////////////
// Flat method

// const arr = [[1, 2, 3], 4 , 5, [6, 7 ,8]];
// console.log(arr.flat());
// const arrDeep = [[[1, 2], 3], 4 , 5, [6, 7 ,8]];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const flatMovements = accountMovements.flat();
// console.log(flatMovements);
// const calculateTotalBalance = flatMovements.reduce((acc, cur) => {return acc + cur}, 0);
// console.log(calculateTotalBalance);

// const overalBalance = accounts
// .map(acc => acc.movements)
// .flat()
// .reduce((acc, cur) => {return acc + cur}, 0);
// console.log(overalBalance);

// The key difference between flatMap and flat is that flatMap will only flatten one level deep. 
//But in flat method we can decide the level of depth we want to flatten example:- flat(3) so 3 levels deep.
// flatMap
// const overalBalance2 = accounts
// .flatMap(acc => acc.movements)
// .reduce((acc, cur) => {return acc + cur}, 0);
// console.log(overalBalance2);

////////////////////////////////////////////////////
/* EVERY 
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate Callbacks function
function deposit(mov) {
  return mov > 0;
}

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/
///////////////////////////////////////////////////
// Find method
/*const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Sarah Smith');
console.log(account);*/
///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, 
but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// function calcAverageHumanAge1(dogAges) {
//   return dogAges.map((age) => age <= 2 ? 2 * age : 16 + age * 4)
//   .filter(age => age > 18).reduce((acc, cur, i ,arr) => acc + cur / arr.length, 0);
// }
// const age3 = calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]);
// const age4 = calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4]);
// console.log(age3, age4);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages 
to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), 
and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 
years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping 
dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other 
challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]̦̦
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4],

GOOD LUCK 😀
*/

// function calcAverageHumanAge(dogAges) {
//   const humansAges = dogAges.map((age) => age <= 2 ? 2 * age : 16 + age * 4);
//   const adults = humansAges.filter(age => age > 18);

//   return adults.reduce((acc, cur) => acc + cur, 0) / adults.length;
// }
// const age1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const age2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(age1, age2);

// let humansAges = dogAges.map((age) => {
//   if(age <= 2) {
//     return 2 * age;
//   } else {
//     return 16 + age * 4;
//   }
// });
// humansAges = humansAges.filter(age => age > 18);
// console.log(humansAges);

// const average = humansAges.reduce((acc, cur) => {
//   return acc + cur;
// }) /  humansAges.length;
// console.log(average);

// Maximum value
/*
const max = movements.reduce((acc, cur) => {
  return acc > cur ? acc : cur;
}, movements[0]);
console.log(max);
*/
/*
const balance = movements.reduce((acc, cur, i , arr) => {
  console.log(`Iteration ${i}: accumulator:- ${acc} and current:- ${cur}`);
  return acc + cur;
}, 0);
console.log(balance);
/*
const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/
/*
const eurToUSD = 1.1;
const movementsToUSD = account1.movements.map(mov => {
  return mov * eurToUSD;
});
console.log(movementsToUSD);

const movementsDescription = account1.movements.map((mov, i) => {
    return `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${mov > 0 ? mov : Math.abs(mov)}`;
});
console.log(movementsDescription);
*/
///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's 
age, and stored the data into an array (one array for each). For now, they are just 
interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at 
least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, 
not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that 
copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult 
("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*
const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];
function checkDogs(dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  dogs.forEach((dogAge, i) => {
    if(dogAge >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dogAge} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  })
}
checkDogs(dogsJulia, dogsKate);*/
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];
// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
arr.splice(-1);
console.log(arr);
arr.splice(1, 1);
console.log(arr);

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Insert 1 element at index 1
console.log(months);

months.splice(2, 1, 'May');
console.log(months); //Expected ouyput: ['Jan', 'Feb', 'May', 'April', 'June']

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
// Reverse method always changes/mutates the original array
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));
*/
/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting the last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('Jonas'.at(0));
console.log('Jonas'.at(-1));
*/
/*

for(const [i, movement] of movements.entries()) {
  if(movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${Math.abs(movement)}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log('----FOREACH-----');
movements.forEach((movement, i, arr) => {
  if(movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${Math.abs(movement)}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
 // console.log(arr);
})*/