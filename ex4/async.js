const fs = require('fs');

function callback(err, data) {
  if (err) {
    console.log(err);
  }
  dataarr = data.toString().split('\n');
  console.log(dataarr.length - 1);
}

function read(filelocation) {
  fs.readFile(filelocation, callback);
}

read(process.argv[2]);
