const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
  else if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

const head = function(arr) {
  let indexOne = arr[0]; // checking to
  return indexOne;
};

assertEqual(head([2,6,5]), 2);
assertEqual(head(["Hell", "Lighthouse", "Labs"]), "Hell");