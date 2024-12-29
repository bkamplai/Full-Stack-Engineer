// Runtime Errors
console.log('This message will be printed to the console.');

function throwError() {
    return notDefinedVar;
}

// Call throwError() below:
throwError();

console.log('Because of the error, this will not be printed!');

// Constructing an Error
// Write your code below:
console.log(Error('User missing name'));


console.log('Will logging the error stop our program from running?');

// The throw Keyword
throw Error('Username or password does not match');

// The try...catch Statement
try {
    throw Error('This is an error.');
} catch (e) {
    console.log(e);
}

// Handling with try...catch
function capAllElements(arr) {
    try {
        arr.forEach((el, index, array) => {
            array[index] = el.toUpperCase();
        });
    } catch (e) {
        console.log(e);
    }
}

capAllElements('Incorrect argument');