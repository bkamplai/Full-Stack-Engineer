// Create an Array
const hobbies = ['programming', 'video games', 'board/card games'];
console.log(hobbies);

// Accessing Elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0];
console.log(listItem);          // Prints: Fortune favors the brave.
console.log(famousSayings[2]);  // Prints: Where there is love there is life.
console.log(famousSayings[3]);  // Prints: undefined

// Update Elements
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';

// Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);  // Prints: [ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]

condiments = ['Mayo'];
console.log(condiments);  // Prints: [ 'Mayo' ]

utensils[3] = 'Spoon';
console.log(utensils);  // Prints: [ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]

// The .length property
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);  // Prints: 3

// The .push() Method
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('change the cat box', 'pick up dog poop');
console.log(chores);  // Prints: [ 'wash dishes', 'do laundry', 'take out trash', 'change the cat box', 'pick up dog poop' ]

// The .pop() Method
chores.pop();
console.log(chores);  // Prints: [ 'wash dishes', 'do laundry', 'take out trash', 'change the cat box' ]

// More Array Methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);                           // Prints: [ 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]

groceryList.unshift('popcorn');
console.log(groceryList);                           // Prints: [ 'popcorn', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]

console.log(groceryList.slice(1, 4));               // Prints: [ 'bananas', 'coffee beans', 'brown rice' ]
console.log(groceryList);                           // Prints: [ 'popcorn', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);                            // Prints: 4

// Arrays and Functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
    arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);               // Prints: [ 'arrays', 'can', 'be', 'MUTATED' ]

function removeElement(newArr) {
    newArr.pop();
}

removeElement(concept);
console.log(concept);               // Prints: [ 'arrays', 'can', 'be' ]

// Nested Arrays
const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];