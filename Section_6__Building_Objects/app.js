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
