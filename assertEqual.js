// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`โโโAssertion passed: ${actual} === ${expected}`);
  else if (actual !== expected)
    console.log(`๐๐๐ Assertion failed: ${actual} !== ${expected}`);
};


module.exports = assertEqual;