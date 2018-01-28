const net = require('net');

const check = (input) => {
  if (input <= 9) {
    return `0${input}`;
  }
  return input;
};
const listener = (socket) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = check(date.getMonth() + 1);
  const day = check(date.getDate());
  const hour = check(date.getHours());
  const min = check(date.getMinutes());
  socket.write(`${year}-${month}-${day} ${hour}:${min}\n`);
  socket.end();
};
const server = net.createServer(listener);
server.listen(process.argv[2]);
