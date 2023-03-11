const fetchAge = require('./fetchAge');

function Celebrity(name) {
    this.name = name;

    fetchAge(this.name,  function (age) {
        this.age = age;
    });
}

module.exports = Celebrity;