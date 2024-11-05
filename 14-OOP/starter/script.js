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

const sj = new Person('Jonas', 1991);
console.log(sj);
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
sj.calcAge();
jack.calcAge();