let users = [];
function handleSubmit() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const contact = document.getElementById("contact").value;
  const email = document.getElementById("email").value;
  const user = {
    firstName: firstName,
    lastName: lastName,
    contact: contact,
    email: email,
  }; // capturing form data as an object
  console.log(user);
  users.push(user); //push the object into the array
  displayData(user);
  event.preventDefault();
}

function displayData(object) {
  const tbody = document.getElementById("tbody");
  console.log(object);
  let tr = document.createElement("tr");
  let firstNameCell = document.createElement("td");
  let lastNameCell = document.createElement("td");
  let contactCell = document.createElement("td");
  let emailCell = document.createElement("td");
  firstNameCell.innerHTML = object.firstName;
  lastNameCell.innerHTML = object.lastName;
  contactCell.innerHTML = object.contact;
  emailCell.innerHTML = object.email;
  tr.appendChild(firstNameCell);
  tr.appendChild(lastNameCell);
  tr.appendChild(contactCell);
  tr.appendChild(emailCell);
  tbody.appendChild(tr);
}
