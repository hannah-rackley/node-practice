//Caeser decipher
var decipher = function (str, offset) {
    var wordArray = [];
    var secondArray = [];
    var finalArray = [];
    var finalString = "";
    for (var i = 0; i < str.length; i++) {
        wordArray.push(str.charCodeAt(i));
    };
    for (var word = 0; word < wordArray.length; word++) {
        if (wordArray[word] >= 65 && wordArray[word] <= 90) {
            if ((wordArray[word] - offset) < 65) {
                secondArray.push(wordArray[word] - offset + 26);
            } else {
                secondArray.push(wordArray[word] - offset);
            };
        } else if (wordArray[word] >= 97 && wordArray[word] <= 122) {
            if ((wordArray[word] - offset) < 97) {
                secondArray.push(wordArray[word] - offset + 26);
            } else {
                secondArray.push(wordArray[word] - offset);
            };
        } else {
            secondArray.push(wordArray[word]);
        }
    };
    for (var j = 0; j < wordArray.length; j++) {
        finalArray.push(String.fromCharCode(secondArray[j]));
    };
    for (var k = 0; k < finalArray.length; k++) {
        finalString += finalArray[k];
    }
    return finalString;
}
console.log(decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13));

exports.decipher = decipher;