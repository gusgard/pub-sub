'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = 3000;

var subSocket = require('./lib/subscribe');
var photos = require('./models/photos');

server.listen(port, function () {
  console.log('server is running in port %d', port);
});


/**
 * Serve static assets out of public
 */
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('./public/index.html');
});

io.sockets.on('connection', function (socket) {
  photos.get(function (err, data) {
    if (err) {
      return;
    }
    data.forEach(function (photo) {
      socket.emit('photo', photo);
    });
  });
});

subSocket.on('message', function (message) {
  io.sockets.emit('photo', message);
})
