// let a = "Hello World";
// var aVar = "Goodbye";

// function b() {}

// var aVar = "change";

// function changeAVar() {
//   let a = 5;
//   console.log(a);
// }
// changeAVar();
// console.log(a);

// try {
//   let a = "hi";
//   let a = "hello"; // This will cause a SyntaxError
// } catch (error) {
//   console.log("An error occurred:", error);
// }

// try {
//   let result = someFunction(); // Might throw an error if function fails
//   console.log(result);
// } catch (error) {
//   console.log("An error occurred:", error.message); // Catch runtime errors
// }

// let c = 1;
// window.c = "other";
// console.log(c);
// console.log(window.c);
// window.c = "smth";
// console.log(c);
// console.log(window.c);

// console.log("==========");

// var d = 2;
// window.d = "changed";
// console.log(d);
// console.log(window.d);

// console.log(a);
// b();

var a;
// var a = "Hi";

// function b() {
//   console.log("Called b");
// }

// const c = () => {
//   console.log("Called c");
// };

// c();
// console.log(a);
// a = 1;

// function b() {
//   console.log("b is defined");
// }

// if (a === undefined) {
//   console.log("a is undefined");
// } else {
//   console.log("a is defined");
// }

// console.log(typeof a);
// console.log(typeof undefined);
// console.log(b());

// function b() {
//   var myVar;
//   //   myVar = 3;
//   console.log(myVar);
// }

// function a() {
//   var myVar = 2;
//   console.log(myVar);
//   b();
// }

// var myVar = 1;
// console.log(myVar);
// a();
// console.log(myVar);

// console.log("====== let =========");

// function bLet() {
//   var myVarLet;
//   //   myVar = 3;
//   console.log(myVarLet);
// }

// function aLet() {
//   var myVarLet = 2;
//   console.log(myVarLet);
//   bLet();
// }

// var myVarLet = 1;
// console.log(myVarLet);
// aLet();
// console.log(myVarLet);

// function a() {
//   let myLet = 2;
//   b();
// }

// let myLet = 1;
// a();

// function a() {
//   function b() {
//     console.log(myLet);
//   }
//   //   let myLet = 2;
//   b();
// }

// let myLet = 1;
// a();
// // b();

// long running function
// function wait3s() {
//   let ms = 3000 + new Date().getTime();
//   while (new Date() < ms) {}
//   console.log("finished function");
// }

// function clickHandler() {
//   console.log("click event");
// }

// document.addEventListener("click", clickHandler);

// wait3s();
// console.log("finished execution");

function wait3s() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("finished function");
      resolve();
    }, 3000);
  });
}

function clickHandler() {
  console.log("click event");
}

document.addEventListener("click", clickHandler);

wait3s().then(() => {
  console.log("finished execution");
});
