'use strict';

var express = require('express');
var app = express();
var photos = require('./controller/photos');

//expect to receive json
app.use(express.json());

//photos is a middleware/controller
app.post('/', photos.save, photos.send, function (req, res) {
  res.send('\nDOne!!!!!!\n');
});

app.listen(8000);
