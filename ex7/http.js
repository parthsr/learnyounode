const http = require('http');

const callback = (response) => {
  response.on('data', (data) => {
    console.log(data.toString());
  });
};

http.get(process.argv[2], callback);
