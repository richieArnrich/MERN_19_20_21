// create a read stream
const fs = require("fs");
const zlib = require("zlib");
const readStream = fs.createReadStream("data.txt", {
  highWaterMark: 2, // set the high water mark to 10
});
const gzipStream = zlib.createGzip();
const writeableStream = fs.createWriteStream("example1.txt.gz");

readStream.pipe(gzipStream).pipe(writeableStream);
