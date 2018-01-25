const fs = require('fs');

function read(file) {
  let buffer = fs.readFileSync(file);
  buffer = buffer.toString();
  buffer = buffer.split('\n');
  return (buffer.length - 1);
}

module.exports = read;
