const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
  else if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(obj, val) {
  let output = '';
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  for (let i = 0; i < keys.length; i++) {
    if (val === values[i]) {
      output += keys[i];
    }
  }
  return output;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "Test"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);