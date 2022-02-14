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
 }

 const assertArraysEqual = function (arr1, arr2) {
   if (eqArrays(arr1, arr2) === true) {
     console.log(`✅✅✅Assertion passed: ${arr1} === ${arr2}`);
   } else {
    console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
  }
 };


 const takeUntil = function(array, callback) {
   const output = []
   for (const i of array) {
     if (callback(i)) { // if the arr contains the params of the callback in this case if x < 0 or if x = ',' return the output at the point of contact with that condition. 
       return output
     } else {
       output.push(i) // if not, push the array to the output. 
     }
   }
 }
// // ...


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

assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ])


assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])
/////////////////////////////////////////
////////////////EXP OUTPUT///////////////
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]