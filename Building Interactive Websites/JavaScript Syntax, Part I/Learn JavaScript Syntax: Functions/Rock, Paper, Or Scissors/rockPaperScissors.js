const getUserChoice = userInput => userInput.toLowerCase() === 'rock' || userInput.toLowerCase() === 'paper' || userInput.toLowerCase() === 'scissors' || userInput.toLowerCase() === 'bomb' ? userInput.toLowerCase() : console.log('Invalid Choice');

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

const determineWinner = (userChoice, computerChoice) => {
    // Check if the user used the cheat code
    if (userChoice === 'bomb') {
        return 'You won!';
    }

    // Check if the userChoice equals the computerChoice
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }

    // Check if the userChoice is 'rock'
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }

    // Check if the userChoice is 'paper'
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }

    // Check if the userChoice is 'scissors'
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }
};

const playGame = () => {
    // Get user's choice
    const userChoice = getUserChoice('bomb'); // Replace 'bomb' with 'rock', 'paper', or 'scissors' to test other options

    // Get computer's choice
    const computerChoice = getComputerChoice();

    // Log the choices
    console.log(`User choice: ${userChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    // Determine and log the winner
    console.log(determineWinner(userChoice, computerChoice));
};

// Start the game
playGame();