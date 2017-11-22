var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('engine.io').attach(server);


app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.on('message', function (v) {
        for(var cliId in io.clients){
            if(io.clients.hasOwnProperty(cliId)){
                io.clients[cliId].send(v);
            }
        }
    });
});

var port = process.env.PORT || 3000;
server.listen(port,'192.168.15.214',null, function () {
    console.log('\x1B[96mlistening on localhost:' + port + ' \x1B[39m');
});