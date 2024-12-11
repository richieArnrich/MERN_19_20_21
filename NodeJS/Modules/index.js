// make use of calculator funcs in index
// import the module given by calculatorFuncs.js
const calcFuncs = require("./calculatorFuncs.js");
// deconstruct calcFuncs variable
const { add, sub, multiply } = calcFuncs;
console.log("calc funcs: ", calcFuncs);

// call add function:
calcFuncs.add(13, 12);

// call the deconstructed attribute
add(25, 23);
sub(25, 2);
multiply(25, 2);

// modules
// reusable pieces of functions
// can be used in multiple filess
