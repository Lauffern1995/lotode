

const eqArrays = function(arr1, arr2) {
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
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅Assertion passed: ${arr1} === ${arr2}`);
  } else if (eqArrays(arr1, arr2) === false) {
  } console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);

};

const middle = function(arr) {
  let odd = [];
  let even = [];
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    odd.push(arr[arr.length / 2 | 0]);

  } else if (arr.length % 2 === 0) {
    even.push(arr[arr.length / 2 - 1]);
    even.push(arr[arr.length / 2 | 0]);
    return even;

  }
  return odd;
};

console.log(middle([1, 2, 3, 4, 5, 6, 7])); // => [4]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2])); // => []
console.log(middle([1])); // => []