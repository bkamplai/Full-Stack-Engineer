// Import assert here
const assert = require('assert');

describe('-', () => {
    it('returns the difference of two values', () => {
        const bigNum = 100;
        const smallNum = 4;
        const expected = 96;

        const result = bigNum - smallNum;

        // Write assertion here
        assert.ok(result === expected);
        assert.equal(result, expected);
        assert.strictEqual(result, expected);
    });
});

describe('+', () => {
    it('returns the sum of two values', () => {
        // Setup
        let expected = { a: 3, b: 4, result: 7 };
        let sum = { a: 3, b: 4 };

        // Exercise
        sum.result = sum.a + sum.b;

        // Verify
        assert.deepStrictEqual(sum, expected);
    });
});

describe('+', () => {
    it('returns the sum of two values', () => {
        // Setup
        let expected = [3, 4, 7];
        let sum = [3, 4];

        // Exercise
        sum.push(3 + 4);

        // Verify
        assert.deepStrictEqual(sum, expected);
    });
});