const eqArrays = require('./eqArrays')

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`โโโAssertion passed: ${arr1} === ${arr2}`);
  } else {
   console.log(`๐๐๐ Assertion failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual