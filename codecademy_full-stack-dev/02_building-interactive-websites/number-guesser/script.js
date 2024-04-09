let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function compareGuesses(userGuess, computerGuess, targetGuess) {
    const userDiff = Math.abs(userGuess - targetGuess);
    const computerDiff = Math.abs(computerGuess - targetGuess);
    if (userDiff <= computerDiff) {
        return true;
    } else {
        return false;
    }
}

function updateScore (winner) {
    if (winner.toLowerCase() === "human") {
        humanScore += 1;
    } else if (winner.toLowerCase() === "computer") {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}
