async function getAllData() {
  await fetch("http://localhost:8000/users")
    .then((res) => res.json())
    .then((res) => {
      alert(res.message);
      console.log(res.users);
      display(res.users);
    })
    .catch((err) => console.log(err));
}

function getSingleData() {
  let id = document.getElementById("id").value;
  id = parseInt(id);
  alert("entered id is: " + id + "type: " + typeof id);
  fetch(`http://localhost:8000/single-user/${id}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      displaySingleUser(res.user);
    })
    .catch((err) => {
      console.log(err);
    });
  event.preventDefault();
}

function display(users) {
  let tbody = document.getElementById("tbody");
  for (let user of users) {
    let tr = document.createElement("tr");
    let nameCell = document.createElement("td");
    let idCell = document.createElement("td");
    nameCell.innerHTML = user.name;
    idCell.innerHTML = user.id;
    tr.appendChild(nameCell);
    tr.appendChild(idCell);
    tbody.appendChild(tr);
  }
}

function displaySingleUser(user) {
  let div = document.getElementById("single-user");
  let namePara = document.createElement("p");
  let idPara = document.createElement("p");
  namePara.innerHTML = "Name = " + user.name;
  idPara.innerHTML = "ID = " + user.id;
  div.appendChild(namePara);
  div.appendChild(idPara);
}
