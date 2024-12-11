const fs = require("fs");

// write into a file synchronously
function synchronousWrite(data) {
  fs.writeFileSync("WriteFile.txt", data);
}

// write into a file asynchrnously
function asyncWrite(data) {
  fs.writeFile("WriteFile.txt", data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Data written successfully");
    }
  });
}

module.exports = { synchronousWrite, asyncWrite };
