// The async Keyword
function withConstructor(num) {
    return new Promise((resolve, reject) => {
        if (num === 0) {
            resolve('zero');
        } else {
            resolve('not zero');
        }
    });
}

withConstructor(0)
    .then((resolveValue) => {
        console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
    });

// Write your code below:
async function withAsync(num) {
    if (num === 0) return 'zero';
    else return 'not zero';
}

// Leave this commented out until step 3:
withAsync(100)
    .then((resolveValue) => {
        console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
    })

// The await Operator
const brainstormDinner = require('./library.js');

// Native promise version:
function nativePromiseDinner() {
    brainstormDinner().then((meal) => {
        console.log(`I'm going to make ${meal} for dinner.`);
    });
}

// async/await version:
async function announDinner() {
    let meal = await brainstormDinner();
    console.log(`I'm going to make ${meal} for dinner.`);
}

// nativePromiseDinner();
announDinner();