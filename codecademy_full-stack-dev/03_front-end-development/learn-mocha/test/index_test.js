const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      //setup
      const expected = 'cock-a-doodle-doo!';
      //exercise
      const result = Rooster.announceDawn();
      //verify
      assert.strictEqual(expected, result);
    });
  });

  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      //setup
      const number = 12;
      const expected = number.toString();
      //exercise
      const result = Rooster.timeAtDawn(12);
      //verify
      assert.strictEqual(expected, result);
    });

    it('throws an error if passed a number less than 0', () => {
      //setup
      const hour = -1;
      //verify
      assert.throws(
        () => {
          Rooster.timeAtDawn(hour);
        },
        RangeError
      );
    });
    
    it('throws an error if passed a number greater than 23', () => {
            //setup
      const hour = 24;
      //verify
      assert.throws(
        () => {
          Rooster.timeAtDawn(hour);
        },
        RangeError
      );
    });
  });
});
