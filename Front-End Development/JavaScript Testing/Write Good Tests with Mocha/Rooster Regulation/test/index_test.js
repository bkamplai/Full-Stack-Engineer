const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
    describe('.announceDawn', () => {
        it('returns a rooster call', () => {
            const expected = 'cock-a-doodle-doo!';

            const result = Rooster.announceDawn();

            assert.strictEqual(result, expected);
        });
    });

    describe('.timeAtDawn', () => {
        it('returns its argument as a string', () => {
            const expected = '12';

            const result = Rooster.timeAtDawn(12);

            assert.strictEqual(result, expected);
        });

        it('throws an error if passed a number less than 0', () => {
            const hour = -1;

            assert.throws(() => {
                Rooster.timeAtDawn(hour);
            }, RangeError);
        });

        it('throws an error if passed a number greater than 23', () => {
            const hour = 24;

            assert.throws(() => {
                Rooster.timeAtDawn(hour);
            }, RangeError);
        });
    });
});