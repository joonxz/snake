var canvas = document.getElementById('snake');
var ctx = canvas.getContext('2d');

var inputState = {
  joystick: {x: 0.0, y: 0.0},
  blastButton: false
};