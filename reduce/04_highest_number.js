const greater = function (x, y) {
  return y > x ? y : x;
}

const highestNumber = function (...numbers) {
  // return numbers.reduce(greater, -Infinity);
  // return numbers.reduce(function (x, y) { return y > x ? y : x; }, -Infinity);
  // return numbers.reduce((x, y) => { return y > x ? y : x; }, -Infinity);
  return numbers.reduce((x, y) => y > x ? y : x, -Infinity);
}

console.log('Highest number :', highestNumber(1, 2, 3, 4, 5));
console.log('Highest number :', highestNumber(1, 2, 3, 5, 4));
console.log('Highest number :', highestNumber(1, 2, 5, 3, 4));
console.log('Highest number :', highestNumber(5, 1, 2, 3, 4));