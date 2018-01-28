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


var http = require('http')
  var bl = require('bl')

  http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }
      data = data.toString()
      console.log(data.length)
      console.log(data)
    }))
  })
