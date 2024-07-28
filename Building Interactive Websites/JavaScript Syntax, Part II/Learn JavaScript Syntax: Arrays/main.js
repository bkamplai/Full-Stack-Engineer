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