const express = require("express");
const app = express();
const cors = require("cors");
const users = [
  { name: "Sachin", id: 10 },
  { name: "Virat", id: 18 },
  { name: "Dhoni", id: 7 },
  { name: "Ganguly", id: 1 },
  { name: "Sam", id: 11 },
  { name: "Dam", id: 12 },
  { name: "Ram", id: 13 },
  { name: "Tom", id: 14 },
  { name: "Jerry", id: 15 },
  { name: "Jane", id: 15 },
];
app.use(cors());
app.get("/users", (req, res) => {
  res.json({ users: users, message: "Users retrieved successfully" });
});

app.get("/single-user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log("id captured: " + id);
  for (let user of users) {
    if (user.id === id) {
      res.json({ user: user, message: "user retrieved successfully" });
      return;
    }
  }
  res.json({ message: "user not found" });
});
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
