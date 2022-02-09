

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(array) {
  let odd = [];
  let even = [];
  if (array.length <= 2) { // if arrayay is less than or equal to 2 return empty array
    return [];
  } else if (array.length % 2 !== 0) { 
    odd.push(array[array.length / 2 | 0]); // push arrayy at arr / 2 position 0

  } else if (array.length % 2 === 0) {
    even.push(array[array.length / 2 - 1]);
    even.push(array[array.length / 2 | 0]);
    return even;

  }
  return odd;
};

console.log(middle([1, 2, 3, 4, 5, 6, 7])); // => [4]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2])); // => []
console.log(middle([1])); // => []
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]