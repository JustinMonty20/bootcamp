// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position
    this.position = {x, y}
}

/**
 * STOP
 * 
 * If you don't understand what I did here comment it out and then come back to it. 
 * replace it with whatever you did for the first one and then try to figure it out.
 * 
 */
Shape.prototype.move = function(x, y) {
    const {x: x1, y: y1} = this.position;

    this.position = {
        x: x1 + x,
        y: y1 + y,
    } 
}

module.exports = Shape;