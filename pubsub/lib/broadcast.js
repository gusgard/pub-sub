'use strict';

var axon = require('axon');
var socket = axon.socket('pub');

socket.bind(8001);

/**
 * Send a photo to the publish socket
 */

exports.send = function (photo) {
  socket.send(photo);
}
