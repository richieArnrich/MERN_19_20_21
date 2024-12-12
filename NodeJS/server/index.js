// create a server using http module
const http = require("http");
const mongoose = require("mongoose");
// import model
const User = require("./model/userSchema");
const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Amazon");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error connecting to MongoDB");
    console.log(err);
  }
};

const server = http.createServer(async (req, res) => {
  // respond json data
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  const user = await User.find();
  res.end(JSON.stringify(user));
});

server.listen(8000, () => {
  console.log("server listening on 8000");
  connect();
});
