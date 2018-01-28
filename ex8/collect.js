const http = require('http');

let stringData = '';
const callback = (response) => {
  response.setEncoding('utf8');
  response.on('data', (data) => {
    stringData += data;
  });
  response.on('end', () => {
    console.log(stringData.length);
    console.log(stringData);
  });
};
http.get(process.argv[2], callback);
