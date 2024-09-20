// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validateCred(array) {
    let sum = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        let value = array[i];
        if ((array.length - 1 - i) % 2 === 1) {
            value *= 2;
            if (value > 9) {
                value -= 9;
            }
        }
        sum += value;
    }
    return sum % 10 === 0;
}

// console.log(validateCred(valid1));
// console.log(validateCred(valid2));
// console.log(validateCred(valid3));
// console.log(validateCred(valid4));
// console.log(validateCred(valid5));

// console.log(validateCred(invalid1));
// console.log(validateCred(invalid2));
// console.log(validateCred(invalid3));
// console.log(validateCred(invalid4));
// console.log(validateCred(invalid5));

function findInvalidCards(cards) {
    let invalidCards = [];
    for (let i = 0; i < cards.length; i++) {
        if (!validateCred(cards[i])) {
            invalidCards.push(cards[i]);
        }
    }
    return invalidCards;
}

// console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5]));

function idInvalidCardCompanies(invalidCards) {
    let companies = [];
    for (let i = 0; i < invalidCards.length; i++) {
        switch (invalidCards[i][0]) {
            case 3:
                if (companies.indexOf('Amex') === -1) {
                    companies.push('Amex');
                }
                break;
            case 4:
                if (companies.indexOf('Visa') === -1) {
                    companies.push('Visa');
                }
                break;
            case 5:
                if (companies.indexOf('Mastercard') === -1) {
                    companies.push('Mastercard');
                }
                break;
            case 6:
                if (companies.indexOf('Discover') === -1) {
                    companies.push('Discover');
                }
                break;
            default:
                console.log('Company not found');
        }
    }
    return companies;
}

console.log(idInvalidCardCompanies(findInvalidCards(batch)));

function stringToDigitsArray(cardString) {
    const cleanedString = cardString.replace(/\D/g, '');

    if (cleanedString.length === 0) {
        console.log('Input string contains no digits');
        return [];
    }

    const digitsArray = [];
    for (let i = 0; i < cleanedString.length; i++) {
        digitsArray.push(parseInt(cleanedString[i], 10));
    }

    return digitsArray;
}

console.log(stringToDigitsArray('4539677908016808'));
console.log(stringToDigitsArray('4539-6779-0801-6808'));
console.log(stringToDigitsArray(''));
console.log(stringToDigitsArray('abc'));
console.log(stringToDigitsArray('4539677908016808abc'));
console.log(stringToDigitsArray('abc4539677908016808'));
console.log(stringToDigitsArray('4539677908016808abc4539677908016808'));
console.log(stringToDigitsArray('abc4539677908016808abc4539677908016808abc'));

function convertInvalidToValid(array) {
    let newArray = array.slice();

    function generateCheckDigit(array) {
        let sum = 0;
        let doubleDigit = true;

        for (let i = array.length - 2; i >= 0; i--) {
            let digit = array[i];

            if (doubleDigit) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }

            sum += digit;
            doubleDigit = !doubleDigit;
        }

        let checkDigit = (10 - (sum % 10)) % 10;
        return checkDigit;
    }

    let correctCheckDigit = generateCheckDigit(newArray);
    newArray[newArray.length - 1] = correctCheckDigit;

    return newArray;
}

// Validate the invalid cards
console.log('Is invalid1 valid?', validateCred(invalid1)); // false
console.log('Is invalid2 valid?', validateCred(invalid2)); // false

// Convert invalid cards to valid cards
const corrected1 = convertInvalidToValid(invalid1);
const corrected2 = convertInvalidToValid(invalid2);

// Validate the corrected cards
console.log('Is corrected1 valid?', validateCred(corrected1)); // true
console.log('Is corrected2 valid?', validateCred(corrected2)); // true

// Output the corrected card numbers
console.log('Corrected Card 1:', corrected1);
console.log('Corrected Card 2:', corrected2);