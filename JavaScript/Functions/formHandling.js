function handleSubmit() {
  let detailsEle = document.getElementById("details");
  detailsEle.innerHTML = "";
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let contact = document.getElementById("contact").value;
  let email = document.getElementById("email").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  console.log(firstName, lastName, contact, email, gender.value);
  let myobj = {
    firstName: firstName,
    lastName: lastName,
    contact: contact,
    email: email,
    gender: gender.value,
  };

  for (let keys in myobj) {
    detailsEle.innerHTML += `<p>${keys}: ${myobj[keys]}</p>`;
  }
  event.preventDefault();
}
