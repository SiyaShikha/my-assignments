const highestAndSecondHighest = function ([highest, secondHighest], number) {
  if (number > highest) {
    return [number, highest];
  }

  return [highest, Math.max(number, secondHighest)];
}

const secondHighestNumber = function (...numbers) {
  if (numbers.length < 2) {
    return undefined;
  }

  return numbers.reduce(highestAndSecondHighest, [-Infinity, -Infinity])[1];
}

console.log(secondHighestNumber(1,2,3,4,5));
console.log(secondHighestNumber(1,2,3,5,4));
console.log(secondHighestNumber(1,3,4,2,5));
console.log(secondHighestNumber(1,4,3,2,5));
console.log(secondHighestNumber(4,1,3,5,2));
console.log(secondHighestNumber(4,1));
console.log(secondHighestNumber(4));