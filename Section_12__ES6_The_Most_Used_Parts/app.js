let myVar = 1;
// let

{
  let myVar = 2;
  console.log(myVar);

  {
    let myVar = 3;

    for (let myVar = 4; myVar > 3; myVar--) {
      console.log(myVar);
    }
    console.log(myVar);
  }
}

console.log(myVar);