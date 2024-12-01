console.log(1 < 2 < 3); // true < 3 => true

console.log(3 < 2 < 1); //left-to-right associativity when precedence is equal, and because of boolean coercion to a number
console.log(Number(false));
console.log(false < 1);

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0

console.log(false == 0); // true
console.log(false === 0); // false

console.log(null == 0); // false
console.log(null < 0); // true

console.log("" == 0); // true
console.log("" === 0); // false

console.log("" == false); // true
console.log(Number("")); // 0

console.log(NaN == NaN); // false

console.log("======= Where Coercion is helpful ======");
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean("")); // false

let a;

if (a) {
  console.log("Smth is there.");
} else {
  console.log("There is nth.");
}

console.log(Boolean(0)); //false
a = 0;

console.log(a || "Default value"); // Default value
console.log(a ?? "Default value"); // 0

function greetOldDefault(name) {
  name = name || "Guest Old Way of Default";
  console.log("Hello " + name);
}

greetOldDefault("Deividas"); // Hello Deividas
greetOldDefault(); // Hello Guest Old Way of Default

function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet("Deividas"); // Hello Deividas
greet(); // Hello Guest

console.log(libraryName);
console.log(libraryNameLet);
