const fs = require('fs');

const callback = (err, list) => {
  if (err) {
    console.log(err);
  }
  arr = [];
  list.map((element) => {
    if (element.indexOf(process.argv[3]) > 0) {
      arr.push(element);
    }
    return 0;
  });
  arr.forEach((item) => {
    console.log(item);
  });
};
fs.readdir(process.argv[2], callback);
