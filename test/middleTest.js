
const assert = require('chai').assert;
const middle = require('../middle')



describe("#middle", () => {
  it("returns [4] for [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });
});


// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => [4]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2]), []); // => []
// assertArraysEqual(middle([1]), []); // => []
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
