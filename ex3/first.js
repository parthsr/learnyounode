const fs = require('fs');

function read(file) {
  if (file === undefined || file === null) {
    return false;
  }
  let buffer = fs.readFileSync(file);
  buffer = buffer.toString();
  buffer = buffer.split('\n');
  return (buffer.length - 1);
}

module.exports = read;
