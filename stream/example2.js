// @ts-check
var http = require('http');
http.createServer(function (req, res) {
  let body = '';  
  req.setEncoding('utf8');
  req.on('data', (chunk) => {
    console.log('MUNCH MUNCH MUNCH ...');
    body += chunk;
    console.log(chunk);
  });
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('REQUEST RECEIVED\n');
}).listen(1336, 'localhost');
console.log('SERVER RUNNING ON PORT 1336');