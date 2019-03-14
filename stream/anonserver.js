/*  anonserver.js
    june 17, 2018
    leif anderson
*/

const http = require('http');
const fs = require('fs');
let fpath = process.argv[2];
if (fpath == undefined) fpath = "anoncomments.txt";
let port = process.argv[3];
if (port == undefined) port = '1337';
http.createServer(function (req, res) {
  let body = '';
  req.setEncoding('utf8');
  req.on('data', (chunk) => {
    console.log('\x1b[36m%s\x1b[0m','MUNCH MUNCH MUNCH ...');
    body += chunk;
    console.log(chunk);
    body+= " ";
    body+= Date.now();
    body+= "|";
    body+= "\n";
  });
  req.on('end', () => {
    fs.appendFile(fpath, body, function (err) {
        if (err) throw err; // what, me worry?
        console.log('\x1b[36m%s\x1b[0m','comment saved');
      });
  });
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Your anonymous comment has been logged.\n');
}).listen(port);
console.log('\x1b[33m%s\x1b[0m',`ANONYMOUS COMMENT SERVER RUNNING ON PORT ${port}`);
console.log('\x1b[32m%s\x1b[0m',`system: ${process.platform}`);
console.log('\x1b[36m%s\x1b[0m',`data file: ${fpath}`);
