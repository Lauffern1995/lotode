const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
  else  (actual !== expected);
  console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arr1, arr2) {
  // program to extract value as an array from an array of objects
  // check the length
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    // comparing each element of array
    for (let i = 0; i < arr1.length; i++)
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    return true;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true)
    console.log(`✅✅✅Assertion passed: ${arr1} === ${arr2}`);
  else (eqArrays(arr1, arr2) === false);
  console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
  
};