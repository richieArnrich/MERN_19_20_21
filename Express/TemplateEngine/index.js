const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server runnning" });
});

function checkAge(req, res, next) {
  console.log(req);
  const id = parseInt(req.params.id);
  if (id >= 18) {
    next();
  } else {
    res.json({ message: `User with id ${id} is a minor` });
  }
}

app.get("/:id", checkAge, (req, res) => {
  // send response only when id>18; it should not check for the condition
  const id = parseInt(req.params.id);
  res.json({ message: `User with id ${id} is an adult` });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
