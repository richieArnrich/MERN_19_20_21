const fs = require("fs");

function syncRead() {
  const readData = fs.readFileSync("./WriteFile.txt", "utf-8");
  console.log(readData);
}

function asyncRead() {
  fs.readFile("./WriteFile.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}

module.exports = { syncRead, asyncRead };
