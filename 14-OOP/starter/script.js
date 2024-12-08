'use strict';

/*const Person = function(firstName, birthYear) {
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
console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);
console.log(Person.prototype.constructor);
const arr = [1, 2, 7, 4, 4, 2, 7];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
    return [...new Set(this)];
}
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/
///////////////////////////////////////
// Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property.
The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new
speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed
 to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple
times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// car constructor with make and speed property
/*function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(this.speed);
}
Car.prototype.brake = function () {
    this.speed += 5;
    console.log(this.speed);
}
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();*/

//////////////////////////////////////////////
// ES6 Classes
// Class declaration
/*
class PersonalCL {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    calcAge(){
        console.log(2037 - this.birthYear);
    }
    set fullName(name){
        if(name.includes(" ")) {
            this._fullName = name;
        } else {
            alert(`${name} is not a fullName`);
        }
    }

    get fullName() {
        return this._fullName
    }
    static hey() {
        console.log("Hey Shreyansh");
    }
}

const jassica = new PersonalCL('Jassica Devis', 1993);
console.log(jassica);
jassica.calcAge();
console.log(jassica.__proto__ === PersonalCL.prototype);
PersonalCL.hey();
// Setter and getters
// Object
const account = {
    owner: "Shreyansh",
    movements: [200, 800, 100, 450],

    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov);
    }
};
// get
console.log(account.latest);

// Set
account.latest = 50;
console.log(account);

// Object.create
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = "Steven";
// steven.birthYear = 2002;
// steven.calcAge();
const sj = Object.create(PersonProto);
sj.init("Shreyansh", 2000);
sj.calcAge();
console.log(sj);
 */
///////////////////////////////////////
// Coding Challenge #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before
storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/*
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }
   brake() {
        this.speed += 5;
       console.log(`${this.make} going at ${this.speed} km/h`);
    }
    set speedUS(s){
        this.speed = s * 1.6;
    }
    get speedUS() {
        return this.speed/1.6;
    }
}
const ford = new Car('ford', 150);
ford.accelerate();
ford.accelerate()
ford.brake();
ford.speedUS = 300;
console.log(`Ford going at ${ford.speedUS} km/h`);
console.log(ford);
 */
////////////////////////////////////////////////////////////
/////// Inhertiance Between "Classes": Constructor Functions
/*
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};
const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};
// Linking prototypes
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Information Technology');

mike.introduce();
mike.calcAge();

console.log("mike.__proto__", mike.__proto__);
console.log("mike.__proto__.__proto__", mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/
///////////////////////////////////////
// Coding Challenge #3

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car.
Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery
charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%.
Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and
'chargeBattery' (charge to 90%). Notice what happens when you
'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
/*
const Car =  function(make, speed) {
    this.make = make;
    this.speed = speed;
};
Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
};
Car.prototype.brake = function() {
    this.speed += 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
};

const EV = function(make, speed, charge){
    Car.call(this, make, speed);
    this.charge = charge;
};
// Link prototype
EV.prototype = Object.create(Car.prototype);
EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
};
EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`);
};

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(20);
tesla.accelerate();
*/
/*class PersonalCL {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    calcAge(){
        console.log(2037 - this.birthYear);
    }
    set fullName(name){
        if(name.includes(" ")) {
            this._fullName = name;
        } else {
            alert(`${name} is not a fullName`);
        }
    }

    get fullName() {
        return this._fullName
    }
    static hey() {
        console.log("Hey Shreyansh");
    }
}
class StudentCL extends  PersonalCL {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear); // Always needs to happen first  // Calls the parent class constructor
        this.course = course;
    }
    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
    calcAge() {
        console.log(`I'm ${2037 - this.birthYear} years old, 
        but as a student I feel more like ${2037 - this.birthYear + 10}`);
    }
}
*/
// const martha = new StudentCL('Martha Jha', 2012, "Information technology");
// martha.introduce();
// martha.calcAge()
// StudentCL.hey();
///////////////////////////////////////////////////////////
// Inheritance Between "Classes": Object.create
/*const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
 };
const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}
StudentProto.introduce = function () {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
}
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();*/
class Account {
    // Public variables (normal declarations without using const/let/var)
    locale = navigator.language;

    // Private variables (use #)
    #movements = [];
    #pin;
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        //this.movements = [];
        //this.locale = navigator.language;
    }
    // Public methods
    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    requestLoan(val) {
        if(this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan Approved`);
            return this;
        }
    }

    getMovements() {
        return this.#movements;
    }

    // Private methods
    #approveLoan(val) {
        return true;
    }
}
const acc1 = new Account('Jonas', 'EUR', 1111, []);
acc1.deposit(300);
acc1.withdraw(120);
acc1.requestLoan(1000);
console.log(acc1);

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
///////////////////////////////////////
// Coding Challenge #3

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car.
Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%.
Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery'
(charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
///////////////////////////////////////
// Coding Challenge #4

/*
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class CarCL {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed} km/h`);
        return this;
    }
    break() {
        this.speed += 5;
        console.log(`${this.make} going at ${this.speed} km/h`);
        return this;
    }
    get speedUS() {
        return this.speed/1.6;
    }
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}
class EVCL extends CarCL {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery (chargeTo) {
        this.#charge = chargeTo;
        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this;
    }
}

const rivian = new EVCL('Rivian', 120, 23);
rivian.accelerate().accelerate().accelerate().break().chargeBattery(50).accelerate();