var RandomGenerator = require('./RandomGenerator');

function NewNumber() {
    var random = new RandomGenerator();
    var Number = [];
    for (var index = 0; index < 4; index++) {
        Number[index] = random.nextInt(0, 10);
    }
    return Number;
};

module.exports = NewNumber;