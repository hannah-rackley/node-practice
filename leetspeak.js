//Leetspeak
var leetspeak = function (string) {
    var lowerString = string.toLowerCase();
    var leetLetters = "aeglost"
    var leetNumbers = "4361057"
    var newString = "";
    for (var i = 0; i < lowerString.length; i++) {
        var char = lowerString[i];
        for (var j = 0; j < leetLetters.length; j++) {
            if (leetLetters[j] === char) {
                char = leetNumbers[j];
            } 
        };
        newString += char
    };
    return newString;

}
console.log(leetspeak("HeLLo ThErE"));