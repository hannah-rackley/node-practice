//Just the positives
var positiveNumbers = function positiveNumbers(numbers) {
    var positives = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positives.push(numbers[i]);
        }
    }
    return positives;
}
console.log(positiveNumbers([2, 5, 6]));
console.log(positiveNumbers([-2, 0, 4, 6, 10]));

exports.positiveNumbers = positiveNumbers;