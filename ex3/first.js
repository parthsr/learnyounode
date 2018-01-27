const fs = require('fs');

const read = (file) => {
  if (file === undefined || file === null || !fs.existsSync(file)) {
    return false;
  }
  let buffer = fs.readFileSync(file);
  buffer = buffer.toString();
  buffer = buffer.split('\n');
  console.log(buffer.length - 1);
  return (buffer.length - 1);
};

module.exports = read;
