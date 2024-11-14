let countryEle = document.getElementById("country");
let buttonEle = document.getElementById("btn");

function changeCountry() {
  countryEle.innerHTML = "Australia";
}

buttonEle.addEventListener("click", changeCountry);
