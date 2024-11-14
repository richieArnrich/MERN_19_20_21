function add(a, b) {
  let r = a + b;
  let spanEle = document.getElementById("add");
  spanEle.innerHTML = r;
}

function sub(a, b) {
  let r = a - b;
  let spanEle = document.getElementById("sub");
  spanEle.innerHTML = r;
}
let input1 = parseInt(window.prompt("Enter a number"));
let input2 = parseInt(window.prompt("Enter another number"));

add(input1, input2);
sub(input1, input2);
