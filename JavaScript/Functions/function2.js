function add(a, b) {
  let r = a + b;
  document.write("add = " + r + "<br>");
}

let sub = (a, b) => {
  let r = a - b;
  document.write("sub = " + r + "<br>");
};

let input1 = window.prompt("enter a number");
let input2 = window.prompt("enter another number");
// convert string to number
let num1 = parseInt(input1);
let num2 = parseInt(input2);

add(num1, num2);
sub(num1, num2);
