'use strict';

var request = require('request');
/**
 * get photos for the pub/sub server
 * @param {Function} callback
 */

exports.get = function (callback) {
   request('http://localhost:8000/photos', function (err, res, body) {
     callback(err, JSON.parse(body));
   });
};
