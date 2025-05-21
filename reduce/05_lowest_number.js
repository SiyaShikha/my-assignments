const lowestNumber = function (...numbers) {
  return numbers.reduce((x, y) => y < x ? y : x, Infinity);
}

console.log('Lowest number :', lowestNumber(1, 2, 3, 4, 5));
console.log('Lowest number :', lowestNumber(2, 1, 3, 4, 5));
console.log('Lowest number :', lowestNumber(2, 3, 1, 4, 5));
console.log('Lowest number :', lowestNumber(2, 3, 4, 1, 5));
console.log('Lowest number :', lowestNumber(2, 3, 4, 5, 1));