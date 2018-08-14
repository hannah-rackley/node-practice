var fs = require('fs');
var readline = require('readline');

var capFile = function(filename) {
    fs.readFile(filename, 'utf8', function(err, contents) {
        if (!err) {
            console.log(contents.toUpperCase());
        } else {
            console.log(err);
        }
    })
}

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('filename: ', (function(answer) {
    capFile(answer);
    rl.close();
}))
