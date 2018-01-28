const fs = require('fs');

const filecheck = (filepath) => {
  if (filepath === undefined || filepath === null) {
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

const pathValidtion = path => fs.existsSync(path, (exists) => {
  if (exists) {
    return true;
  }
  console.log('Err2: path not found');
  return false;
});
const ls = (filepath, fileext) => {
  if (!pathValidtion(filepath)) {
    return false;
  }
  if (!filecheck(filepath)) {
    return false;
  }
  if (!validate(fileext)) {
    return false;
  }
  const callback = (err, list) => {
    if (err) {
      console.log(err);
    }
    arr = [];
    list.map((element) => {
      if (element.endsWith(`.${fileext}`)) {
        arr.push(element);
      }
      return 0;
    });
    arr.forEach((element) => {
      console.log(element);
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
