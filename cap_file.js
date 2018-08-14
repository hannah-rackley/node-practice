var fs = require('fs');
var readline = require('readline');

var capFile = function(filename) {
    fs.readFile(filename, function(err, contents) {
        if (err) {
            console.log(err);
        } else {
            console.log(contents.toString().toUpperCase());
        }
    })
}

var rl  = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('filename: ', (function(answer) {
    capFile(answer);
    rl.close();
}))
