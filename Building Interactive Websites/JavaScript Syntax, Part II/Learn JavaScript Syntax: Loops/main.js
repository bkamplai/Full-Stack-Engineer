// Repeating Tasks Manually
const vacationSpots = ['Ireland', 'Germany', 'United Kingdom'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

// The For Loop
for (let i = 5; i < 11; i++) {
    console.log(i);
}

// Looping in Reverse
for (let counter = 3; counter >= 0; counter--) {
    console.log(counter);
}

// Looping through Arrays
for (let i = 0; i < vacationSpots.length; i++) {
    console.log(`I would love to visit ${vacationSpots[i]}`);
}

// Nested Loops
const bobsFollowers = ['Behram', 'Áshildr', 'Narkissos', 'Eduard'];
const tinasFollowers = ['Công', 'Behram', 'Narkissos'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}

// The While Loop
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while (currentCard !== 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}

// Do...While Statements
const cupsOfSugarNeeded = Math.floor(Math.random() * 11);
let cupsAdded = 0;

do {
    cupsAdded++;
    console.log(cupsAdded + ' cup was added');
} while (cupsAdded < cupsOfSugarNeeded);