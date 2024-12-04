// const dave = new Object();

// dave["firstname"] = "Dave";
// dave["lastname"] = "Butkus";

// const firstNameProperty = "firstname";

// console.log(dave);
// console.log(dave[firstNameProperty]);

// console.log(dave.firstname);
// console.log(dave.lastname);

// dave.address = new Object();
// dave.address.street = "Žukausko g.";
// dave.address.city = "Vilnius";
// dave.address.region = "Vilniaus apskritis";

// console.log(dave.address.street);
// console.log(dave.address.city);
// console.log(dave["address"]["region"]);

// const person1 = {
//   firstname: "Dave",
//   lastname: "Butkus",
//   address: {
//     street: "Žukausko g.",
//     city: "Vilnius",
//     region: "Vilniaus apskritis",
//   },
// };

// console.log(person1);

// // const person3 = new Object({
// //   fisrtname: "Dave",
// //   lastname: "Butkus",
// // });

// // console.log(person3);

// function greet(person) {
//   console.log(`Hi ${person.firstname}, you live on ${person.address.street}`);
// }

// greet(dave);

// const belzeb = { firstname: "Belzeb" };

// belzeb.address = {
//   street: "Gedimino pr.",
// };

// greet(belzeb);

// // Funtrions are objects
// function greetFn() {
//   console.log("Hi");
// }

// greetFn.language = "english";

// console.log(greetFn.language);

// let a;

// const anonymousGreet = function () {
//   console.log("Hi");
// };

// anonymousGreet();

// // function log(a) {
// //   console.log(a);
// // }

// function log(a) {
//   a();
// }

// log(function () {
//   console.log("hi");
// });

// //by value

// let v = 3;
// let z;

// z = v;
// v = 5;

// console.log(v); // 5
// console.log(z); // 3

// // by reference (all objects, incl. fns)
// const vObj = { firstname: "Dave" };
// let zObj;

// zObj = vObj;

// console.log(vObj);
// console.log(zObj);

// vObj.firstname = "Dave The 2nd";

// console.log(vObj);
// console.log(zObj);

// // by reference (even as parameters)
// function changeFirstname(obj) {
//   obj.firstname = "Peter";
// }

// changeFirstname(zObj);
// console.log(vObj);
// console.log(zObj);

// const string = "Laba diena";

// console.log(string.toUpperCase());
// console.log(string);

// // quals operator set up a new memory space
// zObj = { firstname: "Anupras" };
// console.log(vObj);
// console.log(zObj);

// // this

// function aThis() {
//   console.log(this);
// }

// let bThis = () => console.log(this);

// aThis();
// bThis();

// const cObjThis = {
//   name: "The c object",
//   log: function () {
//     this.name = "Updated C object";
//     console.log(this);
//   },
// };

// let name = "Global scope name";

// const cObjThisArrow = {
//   name: "The c object",
//   log: () => {
//     console.log(this);
//   },
// };

// cObjThis.log();
// cObjThisArrow.log();

// const reverseAndCheck = (str) => {
//   return str === str.split("").reverse().join("");
// };

// console.log(reverseAndCheck("kedes"));
// console.log(reverseAndCheck("abccba"));
// console.log(reverseAndCheck("abcba"));

// const cart = [
//   { name: "apples", price: 1, qty: 10 },
//   { name: "bananas", price: 2, qty: 20 },
//   { name: "cabages", price: 0.5, qty: 10 },
// ];

// const cartSum = cart.reduce((acc, cur) => {
//   return acc + cur.price * cur.qty;
// }, 0);

// console.log(cartSum);

// let sum = 0;
// cart.forEach((obj) => (sum += obj.price * obj.qty));

// console.log(sum);

// console.log([] == "");
// console.log([] === "");

// console.log("2" == 2);
// console.log("2" === 2);

// console.log("2" + 2);
// console.log(2 + 2);
// console.log("2" * 2);

// console.log(3 > 2 > 1);
// console.log(true > 1);
// console.log(Number(true));

// console.log(1 < 2 < 3);
// console.log(true < 3);

// console.log(3 > 2 == 1);
// console.log(3 > 2 === 1);

// Arrays, fn arguments vs. default values and ...rest

// const arr = [
//   1,
//   false,
//   { name: "Dave", address: "Žukausko g. 17-5" },
//   function (name) {
//     let greeting = "Hello ";
//     console.log(greeting + name);
//   },
//   "hello",
// ];

// console.log(arr);
// arr[3](arr[2].name);
// arr[3](arr[2]["name"]);

// function greet(firstname, lastname, language = "English", ...rest) {
//   //   language = language || "English";

//   if (!arguments.length) {
//     console.log("Missing params");
//     console.log("----------------");
//     return;
//   }
//   console.log(firstname);
//   console.log(lastname);
//   console.log(language);
//   console.log(arguments);
//   console.log("---------------");
// }

// greet();
// greet("Dave");
// greet("Dave", "Butkus");
// greet("Dave", "Butkus", "Lithuanian");
// greet("Dave", "Butkus", "Lithuanian", 10, false, "belekas");

// Function overloading
// function greet(firstname, lastname, language) {
//   language = language || "English";

//   if (language === "en") {
//     console.log("Hello " + firstname + " " + lastname);
//   } else if (language === "lt") {
//     console.log("Labas " + firstname + " " + lastname);
//   } else {
//     console.log("Kukū " + firstname + " " + lastname);
//   }
// }
// greet("Dave", "Butkus", "English");
// greet("Dave", "Butkus", "Lithuanian");
// greet("Dave", "Butkus");

// function greetEnglish(firstname, lastname) {
//   greet(firstname, lastname, "en");
// }

// function greetLithuanian(firstname, lastname) {
//   greet(firstname, lastname, "lt");
// }

// greetEnglish("Dave", "Butkus");
// greetLithuanian("Dave", "Butkus");

// Syntax Parsers, utomatic Semicolon Insertion, Whitespace

// function getPerson() {
//   return { firstname: "Dave", lastname: "Butkus", address: "Žuklausko g." };
// }

// console.log(getPerson());

// let // firstanem of the person
//   firstname,
//   //lastname of the person
//   lastname,
//   // the language
//   // can be "en", "lt", or not provided
//   language;

// const person = {
//   firstname: "Petras",
//   lastname: "Kukuraitis",
// };

// console.log(person);

// IIFEs - Immediatelly Invioked Function Expressions

// Fn statement
function greet(name) {
  console.log("Hello " + name);
}
greet("Dave");

// Using a fn expression
const greetFn = function (name) {
  console.log("Hello " + name);
};
greetFn("Dave");

// Using an Immediately Invoked Frunction Expression (IIFE)

// const greeting = (function (name) {
//   return "Hello " + name;
// })("Dave");
// console.log(greeting);

3;
("I'm a string");
{
  name: "Dave";
}

const firstname = "Dave";

(function (global, name) {
  const greeting = "Inside IFFE: Hello ";
  global.greeting = "Hello";
  console.log(greeting + name);
})(window, firstname); // IIFE

console.log(greeting);
