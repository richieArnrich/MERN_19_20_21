// create a read stream
const fs = require("fs");

const readStream = fs.createReadStream("data.txt", {
  highWaterMark: 2, // set the high water mark to 10
});
let data = "";
readStream.on("data", (chunk) => {
  console.log(chunk.toString());
  data = data + chunk;
});

// create a writeable stream
const writeStream = fs.createWriteStream("data2.txt");
writeStream.write("This is written using write stream");
