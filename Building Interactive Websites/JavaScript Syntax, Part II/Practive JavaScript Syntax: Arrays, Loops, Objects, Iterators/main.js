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

// sortYears()
const sortYears = arr => arr.sort((a, b) => b - a);

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years));
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

// justCoolStuff()
const justCoolStuff = (firstArray, secondArray) => firstArray.filter(e => secondArray.includes(e));

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

console.log(justCoolStuff(myStuff, coolStuff));
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]

// isTheDinnerVegan()
const isTheDinnerVegan = arr => arr.every(e => e.source === 'plant');

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner));
// Should print false

// sortSpeciesByTeeth()
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort((a, b) => a.numTeeth - b.numTeeth);

console.log(sortSpeciesByTeeth(speciesArray));
// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]

// findMyKeys()
const findMyKeys = arr => arr.findIndex(e => e === 'keys');

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff));
// Should print 4