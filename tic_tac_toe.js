//Tic tac toe
var ticTacToe = function ticTacToe(board) {
    var winner = null;
    for (var i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            winner = board[i][0];
        } else if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            winner = board[0][i];
        } else if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            winner = board[0][0];
        } else if (board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
            winner = board[2][0];
        };
    };
    return winner;
};

// console.log(ticTacToe([['O', 'O', 'O'], ['X', null, 'X'], [null, 'X', null]]));
// console.log(ticTacToe([['O', 'X', 'O'], ['O', 'X', null], [null, 'X', null]]));
// console.log(ticTacToe([['O', 'X', 'O'], ['O', 'O', null], [null, 'X', 'X']]));

exports.ticTacToe = ticTacToe;