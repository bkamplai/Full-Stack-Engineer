let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(num1, num2) {
    return Math.abs(num1 - num2);
}

function isGuessValid(guess) {
    if (guess < 0 || guess > 9) {
        alert('Your guess is out of range! Please enter a number between 0 and 9.');
        return false;
    }
    return true;
}

function compareGuesses(userGuess, computerGuess, targetNumber) {
    if (!isGuessValid(userGuess)) {
        return false;
    }

    const userDifference = getAbsoluteDistance(userGuess, targetNumber);
    const computerDifference = getAbsoluteDistance(computerGuess, targetNumber);

    return userDifference <= computerDifference;
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}