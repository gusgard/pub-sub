'use strict';

var redis = require('../lib/redis');

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
