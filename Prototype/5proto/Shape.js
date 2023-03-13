// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position = {x, y}
}

Shape.prototype.move = function(x, y) {
    const {x: x1, y: y1} = this.position;

    this.position = {
        x: x1 + x,
        y: y1 + y,
    } 
}

module.exports = Shape;