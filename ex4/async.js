const fs = require('fs');

const callback = (err, data) => {
  if (err) {
    console.log(err);
  }
  dataarr = data.toString().split('\n');
  console.log(dataarr.length - 1);
};

const read = (filelocation) => {
  if (filelocation === null || filelocation === undefined || !fs.existsSync(filelocation)) {
    return false;
  }
  fs.readFile(filelocation, callback);
};

read(process.argv[2]);

module.exports = read;
