// Introduction
function greetWorld() {
    return 'Hello, World!';
}

// canIVote()
function canIVote(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

// agreeOrDisagree()
function agreeOrDisagree(str1, str2) {
    if (str1 === str2) {
        return 'You agree!';
    } else {
        return 'You disagree!';
    }
}

// lifePhase()
function lifePhase(age) {
    if (age >= 0 && age <= 3) {
        return 'baby';
    } else if (age >= 4 && age <= 12) {
        return 'child';
    } else if (age >= 13 && age <= 19) {
        return 'teen';
    } else if (age >= 20 && age <= 64) {
        return 'adult';
    } else if (age >= 65 && age <= 140) {
        return 'senior citizen';
    } else {
        return 'This is not a valid age';
    }
}

// finalGrade()
function finalGrade(num1, num2, num3) {
    if ((num1 < 0 || num1 > 100) || (num2 < 0 || num2 > 100) || (num3 < 0 || num3 > 100)) {
        return 'You have entered an invalid grade.';
    }

    const average = (num1 + num2 + num3) / 3;

    if (average >= 0 && average <= 59) {
        return 'F';
    } else if (average >= 60 && average <= 69) {
        return 'D';
    } else if (average >= 70 && average <= 79) {
        return 'C';
    } else if (average >= 80 && average <= 89) {
        return 'B';
    } else if (average >= 90 && average <= 100) {
        return 'A';
    }
}

// reportingForDuty()
function reportingForDuty(rank, lastName) {
    return `${rank} ${lastName} reporting for duty!`;
}

// Fix The Broken Code
const rollTheDice = () => {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    return die1 + die2;
}

// calculateWeight()
function calculateWeight(earthWeight, planet) {
    switch (planet) {
        case 'Mercury':
            return earthWeight * 0.378;
        case 'Venus':
            return earthWeight * 0.907;
        case 'Mars':
            return earthWeight * 0.377;
        case 'Jupiter':
            return earthWeight * 2.36;
        case 'Saturn':
            return earthWeight * 0.916;
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
    }
}

// truthyOrFalsy()
function truthyOrFalsy(value) {
    if (value) {
        return true;
    } else {
        return false;
    }
}