'use strict';

$(function () {

  //io global
  var socket = io.connect();

  socket.on('photo',  function (photo) {
    console.log(photo.id);
    var $img = $('<img src="' + photo.photo_id + '" alt = "random photoss">');
    $('.photos-wrapper').prepend($img);

//window.addEventListener('load', function() { var socket = io.connect();
//socket.on('badge', function(badge){
//  badgeWrapper = document.getElementsByClassName('badge-wrapper');
//  badgeWrapper[0].insertAdjacentHTML( 'afterbegin', '' ); });
//});

  });
});
