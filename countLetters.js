const assertEqual = function(actual, expected) {
  if (actual === expected)
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
  else if (actual !== expected)
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
};

const countLetters = function(str) {
  let output = {}
  const newStr = str.replace(/\s/g, "") // newStr has no spaces
  for (const letter of newStr){ //loopthru newStr
    if (output[letter]) { // if output object contains the letter increase the letter by 1
      output[letter] += 1 
  } else {
    output[letter] = 1 // if output doest contain letter, add it with a key of the [letter] ands a value of 1
  }
}
  console.log(output)
}


assertEqual(countLetters('osh'), { o: 1, s: 1, h: 1 });
