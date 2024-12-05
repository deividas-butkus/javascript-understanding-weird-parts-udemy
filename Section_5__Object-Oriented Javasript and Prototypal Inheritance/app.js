// Understanding the Prorotype

// const person = {
//   firstname: "Default",
//   lastname: "Default",
//   getFullName: function () {
//     return this.firstname + " " + this.lastname;
//   },
// };

// console.log(person.getFullName());

// const john = {
//   firstname: "John",
//   lastname: "Doe",
// };

// // ! DON"T DO THIS ever - for demo purposes only
// john.__proto__ = person;

// console.log(john.getFullName());
// console.log(john.firstname);

// const jane = {
//   firstname: "Jane",
// };

// jane.__proto__ = person;
// console.log(jane.getFullName());

// Everything is an Object )or a Primitive)

// const a = {};
// const b = function () {};
// const c = [];

// Reflection and Extend

const person = {
  firstname: "Default",
  lastname: "Default",
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
};

const john = {
  firstname: "John",
  lastname: "Doe",
};

for (const prop in john) {
  if (john.hasOwnProperty(prop)) {
    console.log(prop + ": " + john[prop]);
  }
}

const jane = {
  adsress: "111 Main str",
  getFormalFullName: function () {
    return this.lastname + ", " + this.firstname;
  },
};

const jim = {
  getFirstName: function () {
    return this.firstname;
  },
};

// _.extend(john, jane, jim);

// console.log(john);
// console.log(john.getFormalFullName());
// console.log(john.getFirstName());

Object.assign(john, jane, jim);
console.log(john);
