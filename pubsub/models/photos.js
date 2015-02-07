'use strict';

var redis = require('../lib/redis');
var broadcast = require('../lib/broadcast');

/**
 * Save photos to database
 * @param {Array} photos
 * @param {Function} callback
 */
exports.save = function (photos, callback) {
  if (!photos.length) {
    return callback(null, null);
  }
  var photo = photos.pop();
  redis.lpush('photos', JSON.stringify(photo), function (err) {
      if (err) {
        return callback(err, null);
      }
      exports.save(photos, callback);
  });
}

/**
 * Trim down the redis list
 */

 exports.trim = function () {
   //get from redis 10 elements
   redis.ltrim('photos', 0 ,9);
 }

/**
 * Send out photos to the broadcaster
 * @param {Array} photos
 * @param {Function} callback
 */

 exports.send = function (photos, callback) {
   //for each element photo I will call the function broadcast.send(photo)
   photos.forEach(broadcast.send);
   callback(null, null);
 }

/**
 * Get photos from redis
 * @param {Function} callback
 */
exports.get = function (callback) {
  redis.lrange('photos', 0, -1, function (err, data) {
    if (err) {
      return callback(err, null);
    }
    //for each photo apply the function json.parse
    callback(null, data.map(JSON.parse));
  });
}
