// @ts-check
const http = require('http');

const server = http.createServer((req, res) => {

  let body = ''; 
  
  req.setEncoding('utf8');
  
  req.on('data', (chunk) => {
    console.log('MUNCH MUNCH MUNCH ...');
    body += chunk;
    console.log(chunk);
  });

  req.on('end', () => {
    try {
      const data = JSON.parse(body);
      res.write(typeof data);
      res.end();
    } catch (er) {
      res.statusCode = 400;
      return res.end(`error: ${er.message}`);
    }
  });
});

server.listen(1337);
console.log('SERVER RUNNING ON PORT 1337');
// string// $ curl localhost:1337 -d "{}"
// object
// $ curl localhost:1337 -d "\"foo\""
// string
// $ curl localhost:1337 -d "not json"
// error: Unexpected token o in JSON at position 1
