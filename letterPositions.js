const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅Assertion passed: ${arr1} === ${arr2}`);
  } else {
   console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};



const letterPositions = function(str) {
  const output = {};
  const newStr = str.replace(/\s/g, "");
  for (let i = 0; i < newStr.length; i++) {  //use c style loop to better manage push later
    let letter = newStr[i]; // setting letter  to newStr[i] to
    if (output[letter]) {
      output[letter].push(i);
    } else {
      output[letter] = [i];
    }
  }
  return output;
};

console.log(letterPositions("hello"))
assertArraysEqual(letterPositions("hello").h, [1]);

