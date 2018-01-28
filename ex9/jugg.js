const http = require('http');

let stringData = '';
const callback = (response) => {
  response.setEncoding('utf8');
  response.on('data', (data) => {
    stringData += data;
  });
  response.on('end', () => {
    console.log(stringData);
  });
};
http.get(process.argv[2], callback);


let stringData1 = '';
const callback1 = (response) => {
  response.setEncoding('utf8');
  response.on('data', (data) => {
    stringData1 += data;
  });
  response.on('end', () => {
    console.log(stringData1);
  });
};
http.get(process.argv[3], callback1);


let stringData2 = '';
const callback2 = (response) => {
  response.setEncoding('utf8');
  response.on('data', (data) => {
    stringData2 += data;
  });
  response.on('end', () => {
    console.log(stringData2);
  });
};
http.get(process.argv[4], callback2);
