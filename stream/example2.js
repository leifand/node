var http = require('http');
http.createServer(function (req, res) {
  let body = '';  
  req.setEncoding('utf8');
  req.on('data', (chunk) => {
    console.log('MUNCH MUNCH MUNCH ...');
    body += chunk;
    console.log(chunk);
  });
  /*req.on('end', () => {
    try {
      const data = JSON.parse(body);
      res.write(typeof data);
      res.end();
    } catch (er) {
      res.statusCode = 400;
      return res.end(`error: ${er.message}`);
    }
  });*/
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('ANONYMOUS COMMENT RECEIVED\n');
}).listen(1336, 'localhost');
console.log('ANONYMOUS COMMENT SERVER RUNNING ON PORT 1336');