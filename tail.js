const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
  else if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

const tail = function(arr) {
  let newArr = arr.slice(1);// starts the new array at position 1
  return newArr
};

const words = ["Yo Yo", "Lighthouse", "Labs",];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
