// Functions as Data
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
        if((2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
};

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo();
console.log(isTwoPlusTwo.name);

// Functions as Parameters
const addTwo = num => {
    return num + 2;
}

const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);

    if (checkA === checkB) {
        return func(val);
    } else {
        return 'inconsistent results';
    }
}

console.log(checkConsistentOutput(addTwo, 8));

// The .forEach() Method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(fuit => console.log(`I want to eat a ${fuit}`));

// The .map() Method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(animal => animal[0]);
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(number => number / 100);
console.log(smallNumbers);

// The .filter() Method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers2 = randomNumbers.filter(number => number < 250);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(word => word.length > 7);

// The .findIndex() Method
const animals2 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals2.findIndex(animal => animal === 'elephant');
const startsWithS = animals2.findIndex(animal => animal[0] === 's');

// The .reduce() Method
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue;
}, 10);

console.log(newSum);

// Iterator Documentation
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words.some(word => word.length < 6));

const interestingWords = words.filter(word => word.length > 5);
console.log(interestingWords.every(word => word.length > 5));

// Choose the Right Iterator
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
const nums = [1, 50, 75, 200, 350, 525, 1000];

cities.forEach(city => console.log('Have you visited ' + city + '?'));

const longCities = cities.filter(city => city.length > 7);

const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0];
}, "C");
console.log(word);

const smallerNums = nums.map(num => num - 5);
nums.every(num => num < 0);