var express = require('express');
var app = express();
var server = require('http').createServer(app);


app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/client.html');
});

var port = process.env.PORT || 3003;
server.listen(port, function () {
    console.log('\x1B[96mlistening on localhost:' + port + ' \x1B[39m');
});