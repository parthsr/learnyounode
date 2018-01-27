const fs = require('fs');

const filecheck = (filepath) => {
  if (filepath === undefined || filepath === null || !fs.existsSync(filepath)) {
    return false;
  }
  return true;
};
const validate = (fileext) => {
  if (fileext === null || fileext === undefined) {
    return false;
  }
  return true;
};
const ls = (filepath, fileext) => {
  const callback = (err, list) => {
    if (err) {
      console.log(err);
    }
    arr = [];
    list.map((element) => {
      if (element.indexOf(fileext) > 0) {
        arr.push(element);
      }
      return 0;
    });
    return arr;
  };
  if (!filecheck(filepath)) {
    return false;
  }
  if (!validate(fileext)) {
    return false;
  }
  return fs.readdir(filepath, callback);
};

ls(process.argv[2], process.argv[3]);
module.exports = ls;
