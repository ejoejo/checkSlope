var RandomGenerator = require('./RandomGenerator');
var NewNumber = require('./NewNumber');
var checkSlope = require('./checkSlope');
var $ = require('jquery');

$(function () {
    var line1 = NewNumber();
    $("#line1").val(line1);
    var line2 = NewNumber();
    $("#line2").val(line2);

    $("#line1").change(function () {
        var input = [];
        var Input = $("#line1").val();
        for (index = 0; index < 4; index++) {
            input.push(parseInt(Input.slice(index, index + 1)));
        }
        $("#line1").val(input);
    });
    $("#line2").change(function () {
        var input = [];
        var Input = $("#line2").val();
        for (index = 0; index < 4; index++) {
            input.push(parseInt(Input.slice(index, index + 1)));
        }
        $("#line2").val(input);
    });

    $(".btn").click(function () {
        var line1 = $("#line1").val();
        var line2 = $("#line2").val();

        var m1 = checkSlope(line1);
        var m2 = checkSlope(line2);

        if (m1 == m2)
            alert("兩線平行");
        else
            alert("兩線不平行");
    });
});