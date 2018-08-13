//Factor a number
var factors = function (num) {
    var factors = [];
    for (var i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        };
    };
    return factors;
}

console.log(factors(10));

exports.factors = factors;