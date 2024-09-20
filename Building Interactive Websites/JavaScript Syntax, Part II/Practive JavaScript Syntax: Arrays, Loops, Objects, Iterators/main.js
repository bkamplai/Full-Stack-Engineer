// reverseArray()
function reverseArray(array) {
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

const sentence = ['sense.', 'make', 'all', 'will', 'This'];

console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];

// greetAliens()
function greetAliens(aliens) {
    for (let i = 0; i < aliens.length; i++) {
        console.log(`Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`);
    }
}

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);