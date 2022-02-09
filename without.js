
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
    console.log(`✅✅✅Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
  }
};

const without = function(source, itemsToRemove) {
  const outputArr = [];
  for (let i = 0; i < source.length; i++) {
     if (!itemsToRemove.includes(source[i])) { // checks to see if the iterator at [i] includes itemToRemove
      outputArr.push(source[i]); //push to new array
    }
  }
  return outputArr;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3", ])); // => ["1", "2"]

