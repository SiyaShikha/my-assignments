const isEven = function (num) {
  return num % 2 === 0;
}

const evenOdds = function (numbers) {

  numbers.sort(function (a, b) {
    if (isEven(a) && !isEven(b)) {
      return -1;
    }

    if (!isEven(a) && isEven(b)) {
      return 1;
    }

    return a - b;
  });

  return numbers;
}

console.log(evenOdds([2, 1, 4, 32, 6, 7, 3, 8, 9, 6]));
console.log(evenOdds([8, 2, 1, 4, 3, 7, 32, 6, 9, 6]));
console.log(evenOdds([2, 1, 6, 7, 4, 32, 8, 9, 6, 3]));