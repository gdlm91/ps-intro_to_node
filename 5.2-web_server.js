var fs = require('fs');
var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if(req.url === '/file.txt') {
        fs.createReadStream(__dirname + '/5.2.1-file.txt').pipe(res);
    } else {
        res.end('Hello World');
    }
}).listen(80, 'localhost');

console.log('Server running at http://localhost:80');