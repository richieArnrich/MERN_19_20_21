let answerEle = document.getElementById("ans");
function handleSubmit() {
  let input1 = parseInt(document.getElementById("input1").value);
  let input2 = parseInt(document.getElementById("input2").value);
  let choice = document.getElementById("choice").value;

  switch (choice) {
    case "add":
      {
        add(input1, input2);
      }
      break;
    case "sub":
      {
        sub(input1, input2);
      }
      break;
  }
  event.preventDefault();
}

function add(a, b) {
  let result = a + b;
  answerEle.innerHTML = result;
}
function sub(a, b) {
  let result = a - b;
  answerEle.innerHTML = result;
}
