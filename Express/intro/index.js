// create a simple express js server

/* 
    step 1: import express
    step 2: initialise express
    step 3: create a simple route for get()
    step 4: create a simple request controller for the route
    step 5: start the server using listen()

*/

const express = require("express");
const app = express();

app.get("/get-data", (req, res) => {
  // controller to handle the request
  const data = {
    name: "Ajay",
    id: 10,
  };
  res.json({ resData: data, message: "data retrieval success" });
});

app.get("/get-multi-data", (req, res) => {
  const dataArr = [
    { name: "Ajay", id: 10 },
    { name: "Veena", id: 14 },
    { name: "Virat", id: 15 },
  ];
  res.json({ resdata: dataArr, message: "Multi data retrieval success" });
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
