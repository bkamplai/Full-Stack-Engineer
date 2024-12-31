// checks structure in test/index_test.js 
console.log = function () { };

const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('./test/index_test.js', 'utf8');

describe('Checkpoint 3', () => {
    it('has an it block with required string', () => {

        let structure = function () {
            describe($outerDesc, () => {
                describe($innerDesc, () => {
                    it($itString, () => {
                    });
                });
            });
        };

        let varCallbacks = [
            function ($itString) {
                if ($itString.value !== 'returns the argument with the lowest value') {
                    return { failure: 'Did you pass your it function the right string?' };
                } else {
                    return true;
                }
            }
        ];

        let isMatch = Structured.match(code, structure, { varCallbacks: varCallbacks });
        let failureMessage = varCallbacks.failure || 'Do you have an it block with the right arguments?';
        assert.isOk(isMatch, failureMessage);
    });
});
