'use strict';

var axon = require('axon');
var socket = axon.socket('sub');

socket.connect(8000);

socket.on('erro', function (err) {
  throw err;
});

module.exports = socket;
