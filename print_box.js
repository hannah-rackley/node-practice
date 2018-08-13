//Print a box
var printBox = function (width, height) {
    var i = 0;
    var middle_row_length = (width - 2);
    while (i < height) {
        if (i === 0 || i === (height-1)) {
            var row = "*".repeat(width);
        }
        else {
            row = "*" + " ".repeat(middle_row_length) + "*";
        };
        console.log(row);
        i++;
    };
};

printBox(10, 5);