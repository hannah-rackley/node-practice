//Sum the numbers
var sumNumbers = function sumNumbers(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

//console.log(sumNumbers([2, 5, 6]));
//console.log(sumNumbers([-2, 0, 4, 6, 10]));

exports.sumNumbers = sumNumbers;