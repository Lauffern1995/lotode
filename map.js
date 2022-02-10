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


const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅Assertion passed: ${arr1} === ${arr2}`);
  } else {
   console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const test1 = ["Not", 'Only', 'Alone', 'Home']
const nums = ['123', '456', '789']

const map = function(array, callb){
  const results = [];
  for (let item of array) {
    results.push(callb(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(words);




 assertArraysEqual(map(test1, word => word[0]), [ 'N', 'O', 'A', 'H' ])

 assertArraysEqual(map(test1, word => word[2]), [ 't', 'l', 'o', 'm' ])

 assertArraysEqual(map(nums, num => num.length), [ 3, 3, 3 ])