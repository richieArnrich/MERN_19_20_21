const inputEle = document.getElementById("fname");
const nameEle = document.getElementById("name");
let countEle = document.getElementById("count");
let charEle = document.getElementById("chr");

let count = 0;
function handleChange() {
  let value = inputEle.value;
  nameEle.innerHTML = value;
  count++;
  countEle.innerHTML = count;
  charEle.innerHTML = value.length;
}

inputEle.addEventListener("change", handleChange);
