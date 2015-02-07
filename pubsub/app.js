'use strict';

var express = require('express');
var app = express();
var photos = require('./controller/photos');

//expect to receive json
app.use(express.json());

//photos is a middleware/controller
app.post('/', photos.save, photos.send);

app.get('/photos', photos.get);

app.listen(8000, function () {
  console.log('server is listening in port %d', 8000);
});
