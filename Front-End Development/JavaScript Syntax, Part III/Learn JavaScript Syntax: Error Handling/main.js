console.log('This message will be printed to the console.');

function throwError() {
    return notDefinedVar;
}

// Call throwError() below:
throwError();

console.log('Because of the error, this will not be printed!');
