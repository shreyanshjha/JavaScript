'use strict';

const Person = function(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never create method inside the constructor function
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear);
    // };
}

const jonas = new Person('Jonas', 1991);
console.log(jonas);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jack instanceof Person); // true

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
};
jonas.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapines';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));// false bcoz species are in prototype but in above console we were able to acces metilda.species bcoz javascript internally accessing