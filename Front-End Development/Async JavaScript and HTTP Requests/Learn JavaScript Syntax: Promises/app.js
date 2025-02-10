// Constructing a Promise Object
const inventory = {
    sunglasses: 1900,   // Promise { 'Sunglasses order processed.' }
    // sunglasses: 0,      // Promise { <rejected> 'That item is sold out.' }
    pants: 1088,
    bags: 1344
};

// Write your code below:
function myExecutor(resolve, reject) {
    if (inventory.sunglasses > 0) resolve('Sunglasses order processed.');
    else reject('That item is sold out.');
}

function orderSunglasses() {
    return new Promise(myExecutor);
}

const orderPromise = orderSunglasses();

console.log(orderPromise);

// The Node setTimeout() Function
console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
function usingSTO() {
    console.log('Any string I want!');
}

setTimeout(usingSTO, Math.floor(Math.random() * (Math.floor(3000) - Math.ceil(0) + 1) + Math.ceil(0)));
// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");

// Success and Failure Callback Functions
const { checkInventory } = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
function handleSuccess(resolvedValue) {
    console.log(resolvedValue);
}

function handleFailure(rejectReason) {
    console.log(rejectReason);
}

checkInventory(order).then(handleSuccess, handleFailure);