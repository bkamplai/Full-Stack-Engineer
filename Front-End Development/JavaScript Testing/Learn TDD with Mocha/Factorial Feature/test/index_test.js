var assert = require("assert");
var Calculate = require('../index.js')

describe('Calculate', () => {
    describe('.factorial', () => {
        it('should return 120 when given 5', () => {
            const inputNumber = 5;
            const expectedOutput = 120;

            const result = Calculate.factorial(inputNumber);

            assert.equal(result, expectedOutput);
        });

        it('should return 6 when given 3', () => {
            const inputNumber = 3;
            const expectedOutput = 6;

            const result = Calculate.factorial(inputNumber);

            assert.equal(result, expectedOutput);
        });

        it('should return 1 when given 0', () => {
            const inputNumber = 0;
            const expectedOutput = 1;

            const result = Calculate.factorial(inputNumber);

            assert.equal(result, expectedOutput);
        });
    });
});