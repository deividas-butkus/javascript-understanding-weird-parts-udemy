// let

// let myVar = 1;
// {
//   let myVar = 2;
//   console.log(myVar);

//   {
//     let myVar = 3;

//     for (let myVar = 4; myVar > 3; myVar--) {
//       console.log(myVar);
//     }
//     console.log(myVar);
//   }
// }

// console.log(myVar);

// //const

// const MY_VAR = 1;
// const greet = { name: "Dave" };

// {
//   const greet = { name: "Dave", lastname: "Butkus" };
//   greet.name = "Deividas";
//   console.log(greet);
// }

// console.log(greet);

// Arrow Functions

function greeter(name) {
  return "Hello " + name;
}
console.log(greeter("Dave"));

const greeterArrow = (name) => "Hello " + name;
console.log(greeterArrow("Dave"));

function greet(greetFunc, name) {
  return greetFunc(name);
}

console.log(greet((name) => "Hi " + name, "Deividas"));

// function Timer() {
//   this.seconds = 0;
//   setInterval(() => {
//     this.seconds++;
//     console.log(this.seconds);
//   }, 1000);
// }

// const timer = new Timer();

const greeter2 = {
  name: "Dave",
  greet: function () {
    return "Hello " + this.name;
  },
};

console.log(greeter2.greet());
