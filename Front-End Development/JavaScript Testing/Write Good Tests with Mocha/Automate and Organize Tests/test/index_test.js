// describe and it blocks
describe('Math', () => {
    describe('.min', () => {
        it('returns the argument with the lowest value', () => { });
    });
});

// assert
// import assert here
const assert = require('assert');

describe('+', () => {
    it('returns the sum of its arguments', () => {
        // Write assertion here
        assert.ok(3 + 4 === 7);
    });
});

// Setup, Exercise, and Verify

// Naive approach
describe('.pop', () => {
    it('returns the last element in the array [naive]', () => {
        assert.ok(['padawan', 'knight'].pop() === 'knight');
    });
});

// 3 phase approach
describe('.pop', () => {
    it('returns the last element in the array [3phase]', () => {
        // Setup
        const knightString = 'knight';
        const jediPath = ['padawan', knightString];

        // Exercise
        const popped = jediPath.pop();

        // Verify
        assert.ok(popped === knightString);
    });
});

