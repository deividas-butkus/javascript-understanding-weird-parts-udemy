// Function constructors

// class Person {
//     constructor(firstname, lastname) {
//       this.firstname = "Dave";
//       this.lastname = "Butkus";
//     }
//     log() {
//       console.log("This function is inbvoked");
//     }
//   }

//   const dave = new Person();
//   console.log(dave);
//   dave.log();

function Person(firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log("This fn is invoked");
}

const dave = new Person("Dave", "Butkus");
console.log(dave);

const jane = new Person("Jane", "Doe");
console.log(jane);

// Function Constructos and "prototype"

Person.prototype.getFullName = function () {
  return this.firstname + " " + this.lastname;
};

console.log(dave.getFullName());

console.log(jane.getFullName());

Person.prototype.getFormalFullName = function () {
  return this.lastname + ", " + this.firstname;
};

console.log(dave.getFormalFullName());

// Dangerous Aside: "new" and functions

const anupras = Person("Anupras", "Anupraitis");
console.log(anupras);
// console.log(anupras.getFullName());

const petras = Person("Petras", "Petraitis");
console.log(petras);
// console.log(petras.getFullName());

// Conceptual Aside: Built-In Function Constructors

const a = new Number("3");
console.log(a.toFixed(2));

const b = new String("Dave");
console.log(b.indexOf("e"));
console.log(b.indexOf("jo"));

console.log("Dave".length);

const c = new Date("2024-12-05");
console.log(c);

String.prototype.isLengthGraterThan = function (limit) {
  return this.length > limit;
};
console.log("Dave".isLengthGraterThan(4));

Number.prototype.isPositive = function () {
  return this > 0;
};
console.log((3).isPositive());
const d = 3;
console.log(d.isPositive());

class Utils {
  static isLengthGraterThan(str, limit) {
    return str > limit;
  }
  static isPositive(num) {
    return num > 0;
  }
}
console.log(Utils.isLengthGraterThan("Dave"));
console.log(Utils.isPositive(3));

// Dangerous Aside: Arrays and for ... in

Array.prototype.myCustomFeature = "cool";

const arr = ["Dave", "Hane", "Anupras"];

for (const prop in arr) {
  console.log(prop + ": " + arr[prop]);
}

const keyValuePairs = Object.entries(dave);
const keys = Object.keys(dave);
const values = Object.values(dave);
console.log(keyValuePairs);
console.log(keys);
console.log(values);

for (const key in dave) {
  if (dave.hasOwnProperty(key)) {
    console.log(`${key}: ${dave[key]}`);
  }
  //   console.log(`${key}: ${dave[key]}`);
}

// Object.create and Pure Prototypal Inheritance

//polyfill

const person6 = {
  firstname: "Default",
  lastname: "Default",
  greet: function () {
    return "Hi " + this.firstname;
  },
};

const john = Object.create(person6);
console.log(Object.getPrototypeOf(john) === person6);
john.firstname = "John";
console.log(john.greet());
console.log(john);
