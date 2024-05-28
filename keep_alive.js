var http = require('http');

http.createServer(function (req, res) {
  res.write("The bot is online");
  res.end();
}).listen(8080);
