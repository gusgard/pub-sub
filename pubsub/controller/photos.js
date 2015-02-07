'use strict';

var _ = require('underscore');
var model = require('../models/photos');

/**
 * Send photos to model to be saved
 */

 //next is a function, say move to the next one function
 // like pipe&filters pattern
 exports.save = function (req, res, next) {
   //deep copy of req.body, otherwise its reference to the element
   var photos = _.clone(req.body);
   model.save(photos, function (err) {
     if (err){
       return res.json(503, { error: true });
     }
     //next middleware
     next();
     model.trim();
   });
 }

/**
 * Send photos to publish-subscribe socket in model
 */
exports.send = function (req, res, next) {
  var photos = _.clone(req.body);
  model.send(photos, function (err) {
    if (err){
      return res.json(503, { error: true });
    }
    res.json(200, {error: null});
  });
  next();
}

/**
 * Get 10 photos from model
 */
exports.get = function (req, res) {
  model.get(function (err, data) {
    if (err){
      return res.json(503, { error: true });
    }
    res.json(200, data);
  });
}
