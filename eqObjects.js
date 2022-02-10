const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
  else if (actual !== expected)
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(obj1, obj2) {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
    if (key1.length !== key2.length){
      return false;
    } 
    for (let i = 0; i < key1.length; i++) {
    
      if (!key2.includes(key1[i])){
        return false
      } 
      const val1 = obj1[key1[i]]
      const val2 = obj2[key1[i]]
      console.log(val1, val2)
      if (Array.isArray(val1) && Array.isArray(val2)) {
        if (!eqArrays(val1, val2)){
          return false
        }
      }
      else if (val1 !== val2) {
      return false
    }
  }
    return true
};
console.log([1, 2] === [1, 2])


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc) ,true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
 assertEqual(eqObjects(cd, cd2), false); // => false