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

// numImaginaryFriends()
function numImaginaryFriends(totalNumOfFriends) {
    return Math.ceil(totalNumOfFriends / 4);
}

// sillySentence()
function sillySentence(adjective, verb, noun) {
    return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;
}

// howOld()
function howOld(age, year) {
    const currentYear = new Date().getFullYear();
    const yearDifference = year - currentYear;
    const newAge = age + yearDifference;

    if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`;
    } else if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`;
    } else {
        return `You were ${newAge} in the year ${year}`;
    }
}

// Fix the broken code (round 2)!
const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }
    if (percentSharedDNA > 34) {
        return 'You are likely parent and child or full siblings.'
    }
    if (percentSharedDNA > 13) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }
    if (percentSharedDNA > 5) {
        return 'You are likely 1st cousins.'
    }
    if (percentSharedDNA > 2) {
        return 'You are likely 2nd cousins.'
    }
    if (percentSharedDNA > 0) {
        return 'You are likely 3rd cousins'
    }
    return 'You are likely not related.'
}

console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'

// tipCalculator()
function tipCalculator(quality, total) {
    switch (quality) {
        case 'bad':
            return total * 0.05;
        case 'ok':
            return total * 0.15;
        case 'good':
            return total * 0.2;
        case 'excellent':
            return total * 0.3;
        default:
            return total * 0.18;
    }
}

// toEmoticon()
function toEmoticon(str) {
    switch (str) {
        case 'shrug':
            return '|_{"}_|';
        case 'smiley face':
            return ':)';
        case 'frowny face':
            return ':(';
        case 'winky face':
            return ';)';
        case 'heart':
            return '<3';
        default:
            return '|_(* ~ *)_|';
    }
}