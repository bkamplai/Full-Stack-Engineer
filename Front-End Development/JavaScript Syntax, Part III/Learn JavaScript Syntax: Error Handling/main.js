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