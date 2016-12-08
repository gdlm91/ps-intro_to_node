var fs = require('fs');
var http = require('http');
var socketio = require('socket.io');

var serverHandler = function(req, res) {
    fs.readFile(__dirname + '/5.3.1-index.html', function(err, data) {
        if(err) {
            res.writeHead(500);
            return res.end("Error loading index.html");
        }

        res.writeHead(200);
        res.end(data);
    })
}

var app = http.createServer(serverHandler);
var io = socketio.listen(app);

io.sockets.on('connection', function(socket) {
    setInterval(function() {
        var timestamp = Date.now();
        console.log("Emitted: " + timestamp);
        socket.emit('timer', timestamp);
    }, 2000)

    socket.on('submit', function(data) {
        console.log('Submited: ' + data);
    })
})

app.listen(80);
console.log('Server Running at http://localhost:80');