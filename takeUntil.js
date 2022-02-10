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



const takeUntil = function (array, callback) {
  const output = []
  for (const i of array) {
    if (callback(i)) {
      return output
    } else {
      output.push(i)
    }
  }
}
// ...


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


const data3 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results3 = takeUntil(data3, x => x -1);
console.log(results3);

console.log('---');

assertArraysEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ])


assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ])
/////////////////////////////////////////
////////////////EXP OUTPUT///////////////
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]