//Rock paper scissors
var rockPaperScissors = function rockPaperScissors(throw1, throw2) {
    if (throw1 === throw2) {
        return "draw";
    } else if (throw1 === "rock") {
        if (throw2 === "paper") {
            return "player 2";
        } else if (throw2 === "scissors") {
            return "player 1";
        };
    } else if (throw1 === "paper") {
        if (throw2 === "rock") {
            return "player 1";
        } else if (throw2 === "scissors") {
            return "player 2";
        };
    } else if (throw1 === "scissors") {
        if (throw2 === "rock") {
            return "player 2";
        } else if (throw2 === "paper") {
            return "player 1";
        };
    }
}

console.log(rockPaperScissors('rock', 'scissors'));
console.log(rockPaperScissors('rock', 'paper'));
console.log(rockPaperScissors('paper', 'paper'));

exports.rockPaperScissors = rockPaperScissors;