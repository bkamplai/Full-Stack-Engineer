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