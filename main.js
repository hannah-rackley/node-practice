var printNumber = require('./print_numbers');
var printSquare = require('./print_square');
var printBox = require('./print_box');
var printBanner = require('./print_banner');
var factorNumber = require('./factor_number');
var caesarCipher = require('./caesar_cipher');
var caesarDecipher = require('./caesar_decipher');
var leetSpeak = require('./leetspeak');
var longLongVowels = require('./long_long_vowels');
var sumNumbers = require('./sum_numbers');
var justPositives = require('./just_positives');
var matrixAddition = require('./matrix_addition');
var matricesMultiplication = require('./multiply_matrices');
var rockPaperScissors = require('./rock_paper_scissors');
var ticTacToe = require('./tic_tac_toe');

printNumber.printNumbers(1, 5);

printSquare.printSquare(6);

printBox.printBox(4, 8);

printBanner.printBanner('Hello! My name is Elder Price');

console.log(factorNumber.factors(10));

var translateThis = caesarCipher.cipher('What will this translate to I wonder?', 16);

console.log(translateThis);

console.log(caesarDecipher.decipher(translateThis, 16));

console.log(leetSpeak.leetspeak('MaKe Me Leet'));

console.log(longLongVowels.longLongVowels('Goodbye'));

console.log(sumNumbers.sumNumbers([2, 5, 6]));
console.log(sumNumbers.sumNumbers([-2, 0, 4, 6, 10]));

console.log(justPositives.positiveNumbers([2, 5, 6]));
console.log(justPositives.positiveNumbers([-2, 0, 4, 6, 10]));

console.log(matrixAddition.matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]));

console.log(matricesMultiplication.matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]));

console.log(rockPaperScissors.rockPaperScissors('rock', 'scissors'));
console.log(rockPaperScissors.rockPaperScissors('rock', 'paper'));
console.log(rockPaperScissors.rockPaperScissors('paper', 'paper'));

console.log(ticTacToe.ticTacToe([['O', 'O', 'O'], ['X', null, 'X'], [null, 'X', null]]));
console.log(ticTacToe.ticTacToe([['O', 'X', 'O'], ['O', 'X', null], [null, 'X', null]]));
console.log(ticTacToe.ticTacToe([['O', 'X', 'O'], ['O', 'O', null], [null, 'X', 'X']]));
