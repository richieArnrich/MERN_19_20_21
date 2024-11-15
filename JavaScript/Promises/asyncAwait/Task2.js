let users = [];

async function fetchData() {
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((response) => {
      users = response;
    })
    .catch((err) => console.log(err));
}

function handleSubmit() {
  event.preventDefault();
  let id = document.getElementById("id").value;
  id = parseInt(id);
  let email = document.getElementById("email").value;
  alert(id + " " + email);
  let userObj = {
    id: id,
    email: email,
  };
  authenticateUser(userObj, users);
}

function authenticateUser(userObj, users) {
  let { id, email } = userObj; //deconstructing userObj
  for (let user of users) {
    if (id == user.id && email == user.email) {
      showProfile(user);
    }
  }
}

function showProfile(user) {
  let proTable = document.getElementById("table");
  for (let key in user) {
    let row = document.createElement("tr");
    row.style.textTransform = "capitalize";
    let keyCell = document.createElement("td");
    let valueCell = document.createElement("td");
    if (key != "address" && key != "company") {
      keyCell.innerHTML = key;
      valueCell.innerHTML = user[key];
      row.appendChild(keyCell);
      row.appendChild(valueCell);
      proTable.appendChild(row);
    } else {
      if (key == "address") {
        console.log(key);
        let addressRow = document.createElement("tr");
        let addressCell = document.createElement("td");
        let addressData = document.createElement("td");
        addressCell.innerHTML = "Address";
        addressData.innerHTML = `${user["address"].street} , ${user["address"].suite}, ${user["address"].city}, ${user["address"].zipcode}`;
        addressRow.appendChild(addressCell);
        addressRow.appendChild(addressData);
        proTable.appendChild(addressRow);
      }
      if (key == "company") {
        let companyRow = document.createElement("tr");
        let companyCell = document.createElement("td");
        let companyData = document.createElement("td");
        companyCell.innerHTML = "Company";
        companyData.innerHTML = `${user["company"].name}, ${user["company"].catchPhrase}`;
        companyRow.appendChild(companyCell);
        companyRow.appendChild(companyData);
        proTable.appendChild(companyRow);
      }
    }
  }
}

fetchData();
