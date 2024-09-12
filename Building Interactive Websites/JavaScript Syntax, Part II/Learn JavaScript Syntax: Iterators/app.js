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