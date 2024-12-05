// Initialization

const people = [
  {
    // the John object
    firstname: "John",
    lastname: "Doe",
    addresses: ["111 Main St.", "222 Third St."],
  },
  {
    // the Jane object
    firstname: "Jane",
    lastname: "Doe",
    addresses: ["333 Main St.", "444 Fifth St."],
    greet: function () {
      return "Hello";
    },
  },
];

// console.log(people);
// console.log(people[1].greet());

// 'typeof' , 'instanceof', and Figuring Out What Something Is

var a = 3;
console.log(typeof a);

const b = "Hello";
console.log(typeof b);

const c = {};
console.log(typeof c);

const d = [];
console.log(typeof d); // weird!
console.log(Object.prototype.toString.call(d)); // better!

function Person(name) {
  this.name = name;
}

const e = new Person("Jane");
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like, forever...

const z = function () {};
console.log(typeof z);
