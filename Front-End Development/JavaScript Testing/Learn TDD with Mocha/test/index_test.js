const assert = require('assert');
const Calculate = require('../index.js')

describe('Calculate', () => {
    describe('.sum', () => {
        it('returns the sum of an array of numbers', () => {
            // Code here
            const inputArray = [1, 2, 3];
            const expected = 6;

            const result = Calculate.sum(inputArray);

            assert.strictEqual(result, expected);
        });
    });
});