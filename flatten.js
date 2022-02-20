let flatten = function(array) {
  let newArray = [];
  array.forEach(element => {
    if (Array.isArray(element))
      for (const i of element) {
        newArray.push(i);
      } else {
      newArray.push(element);
    }
  });

  return newArray.sort((a,b) => a -b );
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));



console.log(flatten([1, 5, [9, 4], 5, [6]]));
console.log(flatten([1, 2, [3, 99], 5, [33]]));