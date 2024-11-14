function add(a, b, callSub) {
  // add function
  let r = a + b;
  callSub(r, 3, (subResult, b) => {
    // mul function
    let r = subResult * b;
    document.write("result after mul: " + r + "<br>");
  });
}

add(10, 15, (addResult, b, callMul) => {
  // sub function
  let r = addResult - b;
  document.write("result after sub: " + r + "<br>");
  callMul(r, 3);
});
