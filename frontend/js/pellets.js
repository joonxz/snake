var Pellets = function (x, y) {
  this.x = x;
  this.y = y;
  this.radius = 5;
  this.color = 'black';
}

Pellets.prototype = new Circle();

Pellets.prototype.update = function(time) {
  
};