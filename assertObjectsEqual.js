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

// FUNCTION IMPLEMENTATION

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅ ✅ ✅Assertion Passed ${inspect(actual)} === ${inspect(expected)}`);
  
  } else {
    console.log(`🛑 🛑 🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const bestTVShowsByGenre1 = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
const bestTVShowsByGenre2 = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertObjectsEqual(bestTVShowsByGenre1,bestTVShowsByGenre2)