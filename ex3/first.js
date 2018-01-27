const fs = require('fs');

const verify = (file) => {
  if (file === undefined || file === null || !fs.existsSync(file)) {
    return false;
  }
  return true;
};
const read = (file) => {
  if (!verify(file)) {
    return false;
  }
  let buffer = fs.readFileSync(file);
  buffer = buffer.toString();
  buffer = buffer.split('\n');
  console.log(buffer.length - 1);
  return (buffer.length - 1);
};

module.exports = read;
