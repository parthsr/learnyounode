const net = require('net');

const listener = (socket) => {
  const date = new Date();
  currentHours = date.getHours();
  currentHours = (`0${currentHours}`).slice(-2);
  socket.end(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${currentHours}:${date.getMinutes()}`);
};
const server = net.createServer(listener);
server.listen(process.argv[2]);
