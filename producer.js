'use strict';

var request = require('request');
var arrandom = require('arrandom');

var data = [
  {
    "id" : 1,
    "photo_id": "http://photos-f.ak.instagram.com/hphotos-ak-xap1/t51.2885-15/929245_1415293698763613_450792720_n.jpg"
  },
  {
    "id" : 2,
    "photo_id": "http://scontent-a-mia.cdninstagram.com/hphotos-xap1/t51.2885-15/s306x306/e15/10005243_926727590675147_103480481_n.jpg"
  },
  {
    "id" : 3,
    "photo_id" : "http://scontent-a-mia.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10593415_347064405462868_357187060_n.jpg"
  },
  {
    "id" : 4,
    "photo_id" : "http://scontent-a-mia.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10666101_591178180991273_1981224627_n.jpg"
  },
  {
    "id" : 5,
    "photo_id" : "http://scontent-a-mia.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10895439_1057473894266587_1741002868_n.jpg"
  },
  {
    "id" : 6,
    "photo_id" : "http://scontent-a-mia.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10864768_842886939104087_2028463418_n.jpg"
  },
  {
    "id" : 7,
    "photo_id" : "http://scontent-a-mia.cdninstagram.com/hphotos-xap1/t51.2885-15/e15/10731915_748329725234204_792180467_n.jpg"
  },
  {
    "id" : 8,
    "photo_id" : "http://scontent-b-mia.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/10919174_1398223613808876_141587813_n.jpg"
  },
  {
    "id" : 9,
    "photo_id" : "http://scontent-b-mia.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10895362_342120915975212_584449888_n.jpg"
  },
  {
    "id" : 10,
    "photo_id" : "http://scontent-a-mia.cdninstagram.com/hphotos-xaf1/t51.2885-15/e15/10932204_421198581370165_33430252_n.jpg"
  }
];

var requestObj = {
  json: data,
  method: 'POST',
  url: 'http://localhost:8000'
};

(function _request () {
  requestObj.json = [arrandom(data)[0]];
  request(requestObj, function(err){
    if (err) console.log(err);
    setTimeout(_request, 1900);
  });
})();
