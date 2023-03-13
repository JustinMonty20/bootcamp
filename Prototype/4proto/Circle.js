const Shape = require('./Shape');

function Circle(x, y, radius) {
    Shape.call(this, /* pass arguments to shape */);
    // store radius on this
}

module.exports = Circle;