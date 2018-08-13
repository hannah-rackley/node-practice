//Long-long values
var longLongVowels = function longLongVowels(string) {
    var vowels = "AEIOUaeiou";
    var newString = "";
    var vowel = false;
    for (var i = 0; i < string.length; i++) {
        var char = string[i];
        if (vowel === true && vowel_ === char) {
            newString += (char.repeat(3));
            vowel = false;
        }
        for (var j = 0; j < vowels.length; j++) {
            if (char === vowels[j]) {
                vowel = true;
                var vowel_ = char;
            }
        }
        newString += char;
    }
    return newString;
}

console.log(longLongVowels("Goodbye"));

exports.longLongVowels = longLongVowels;