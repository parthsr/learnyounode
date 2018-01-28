const map = require('through2-map');
const http = require('http');

const server = http.createServer((req, res) => {
  // request handling logic...
  req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
});
server.listen(process.argv[2]);
