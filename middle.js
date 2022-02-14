
const middle = function(array) {
  let odd = [];
  let even = [];
  if (array.length <= 2) { // if arrayay is less than or equal to 2 return empty array
    return [];
  } else if (array.length % 2 !== 0) { 
    odd.push(array[array.length / 2 | 0]); // push arrayy at arr / 2 position 0

  } else if (array.length % 2 === 0) {
    even.push(array[array.length / 2 - 1]);
    even.push(array[array.length / 2 | 0]);
    return even;

  }
  return odd;
};


module.exports = middle