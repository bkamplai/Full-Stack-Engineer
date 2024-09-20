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

// convertToBaby()
function convertToBaby(array) {
    let babyArray = [];
    for (let i = 0; i < array.length; i++) {
        babyArray.push(`baby ${array[i]}`);
    }
    return babyArray;
}

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals));

// Fix The Broken Code!
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
    let results = [];
    // The 'outer' for loop - loops through each element in the array
    for (let i = 0; i < arr.length; i++) {
        number = arr[i];

        // The 'inner' while loop - searches for smallest power of 2 greater than the given number
        let j = 1;
        while (j < number) {
            j = j * 2;
        }
        results.push(j);
    }
    return results
}

console.log(smallestPowerOfTwo(numbers))
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]

// declineEverything() and acceptEverything()
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
    console.log(`No ${veg} please. I will have pizza with extra cheese.`);
}

const declineEverything = (arr) => {
    arr.forEach(politelyDecline);
}

declineEverything(veggies);

const acceptEverything = (arr) => {
    arr.forEach(e => {
        console.log(`Ok, I guess I will eat some ${e}.`);
    });
}

acceptEverything(veggies);

// squareNums()
const numbers1 = [2, 7, 9, 171, 52, 33, 14];

const toSquare = num => num * num;

const squareNums = arr => arr.map(toSquare);

console.log(squareNums(numbers1));

// shoutGreetings()
const shoutGreetings = arr => arr.map(e => e.toUpperCase() + '!');

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings));
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]