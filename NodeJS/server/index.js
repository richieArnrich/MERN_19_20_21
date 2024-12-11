// create a server using http module
const http = require("http");

const server = http.createServer((req, res) => {
  // respond json data
  res.writeHead(200, { "Content-Type": "application/json" });
  //   res.write("Hello World, I am from server");
  const user = {
    name: "Sarvanan",
    profession: "SDE",
    country: "India",
  };
  res.end(JSON.stringify(user));
});

server.listen(8000, () => {
  console.log("server listening on 8000");
});
