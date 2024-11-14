// an asynchronous function assigning a value to a global variable
// showcases the disadvantage of asynchronous programming

// let myValue;
// function assignValue(input) {
//   myValue = input;
// }

// function printValue() {
//   console.log("The given value is: " + myValue);
// }

// assignValue(100);
// printValue();

let myValue;

function assignValue(input) {
  setTimeout(() => {
    myValue = input;
  }, 2000);
}

function printValue() {
  console.log("The given value is: " + myValue);
}

assignValue(100);
printValue();
