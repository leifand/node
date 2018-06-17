/*  anonserver.js
    june 17, 2018
    leif anderson
*/
var http = require('http');
var fs = require('fs');
var fpath = process.argv[2];
if (fpath == undefined) fpath = "anoncomments.txt";
var port = process.argv[3];
if (port == undefined) port = 1337;
http.createServer(function (req, res) {
  let body = '';
  req.setEncoding('utf8');
  req.on('data', (chunk) => {
    console.log('MUNCH MUNCH MUNCH ...');
    body += chunk;
    console.log(chunk);
    body+= " ";
    body+= Date.now();
    body+= "|";
  });
  req.on('end', () => {
    fs.appendFile(fpath, body, function (err) {
        if (err) throw err; // what, me worry?
        console.log('comment saved');
      });
  });
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Your anonymous comment has been logged.\n');
}).listen(port, 'localhost');
console.log(`ANONYMOUS COMMENT SERVER RUNNING ON PORT ${port}`);
console.log(`system: ${process.platform}`);
console.log(`data file: ${fpath}`);