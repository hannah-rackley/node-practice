//Print a square
var printSquare = function (size) {
    var row = "*".repeat(size);
    for (var i = 0; i < size; i++) {
        console.log(row);
    };
};
printSquare(3);

exports.printSquare = printSquare;