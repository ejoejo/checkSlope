function checkSlope(item) {
    var input = [];
    var Input = item;
    for (var index = 0; index < 7; index++) {
        if (input.slice(index, index + 1) == ",") continue;
        input.push(parseInt(Input.slice(index, index + 1)));
    }
    return ((input[6] - input[2]) / (input[4] - input[0]));
}

module.exports = checkSlope;