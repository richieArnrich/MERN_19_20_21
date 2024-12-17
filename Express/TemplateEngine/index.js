const express = require("express");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// configure views
app.set("views", "./views");

// configure ejs
app.set("view engine", "ejs");

// Routes come below

app.get("/", (req, res) => {
  // res.status(200).json({ message: "Server runnning" });
  res.render("form");
});

function checkAge(req, res, next) {
  const age = parseInt(req.body.Age);
  if (age >= 18) {
    next();
  } else {
    res.json({ message: "You are still a minor" });
  }
}

app.post("/age", checkAge, (req, res) => {
  const age = req.body.Age;
  // send response only when id>18; it should not check for the condition
  res.render("success", { myage: age });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
