// simulate a database of users
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    password: "john123",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@gmail.com",
    password: "jane123",
  },
  {
    id: 3,
    name: "Bob Smith",
    email: "bob@gmail.com",
    password: "bob123",
  },
];

async function login() {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    let user = await authenticateUser(email, password);
    if (user) {
      alert("login successfull");
      window.location.href =
        "https://en.wikipedia.org/wiki/Steve_Smith_(cricketer)";
    }
  } catch (err) {
    alert(err);
  }
}

function authenticateUser(email, password) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      for (let user of users) {
        if (user.email === email && user.password === password) {
          resolve(user);
        } else {
          reject("User not found");
        }
      }
    }, 1000);
  });
}
