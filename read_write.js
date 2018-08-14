var fs = require('fs');
var readline = require('readline');

var writeFromFile = function(inputFile, outputFile) {
    fs.readFile(inputFile, 'utf8', function(err, contents) {
        if (err) {
            console.log(err);
        } else {
            fs.writeFile(outputFile, contents, 'utf8', function(err) {
                if (!err) {
                    console.log(`Wrote to file ${outputFile}`)
                } else {
                    console.log(err);
                }
            })
        }
    })
}

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Input file: ', (function(input_answer) {
    rl.question('Output file: ', function(output_answer) {
        writeFromFile(input_answer, output_answer);
        rl.close();
    })
}))
