// Function Declarations
function getReminder() {
    console.log('Water the plants.');
}

function greetInSpanish() {
    console.log('Buenas tardes.');
}

// Calling a Function
// Parameters and Arguments
function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

sayThanks('Cole');
sayThanks('Cole');
sayThanks('Cole');

// Default Parameters
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

// Return
function monitorCount(rows, columns) {
    return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

// Helper Functions
function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);
console.log(totalCost);

// Function Expressions
// Arrow Functions
const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
}

console.log(plantNeedsWater('Tuesday'));