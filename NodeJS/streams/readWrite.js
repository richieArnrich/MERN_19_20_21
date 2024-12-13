const fs = require("fs");

// create read stream
const readStream = fs.createReadStream("data.txt");
// create write stream
const writeStream = fs.createWriteStream("destination.txt");
// pipe read stream to write stream
readStream.pipe(writeStream);
