const lessThan = function (x, y) {
  return x < y;
}

const greaterThan = function (x, y) {
  return x > y;
}

function range(from, to, step) {
  const numbersInRange = [];
  
  if (from > to && step > 0 || from < to && step < 0) {
    return numbersInRange;
  }

  const condition = from < to ? lessThan : greaterThan;

  for (let i = from; condition(i, to); i += step) {
    numbersInRange.push(i);
  }

  return numbersInRange;
}

const fibonacci = function ([previousTerm, currentTerm]) {
  const nextTerm = previousTerm + currentTerm;
  return [currentTerm, nextTerm];
}

const nthFibonacci = function (n) {
  return range(1, n, 1).reduce(fibonacci, [0, 1])[0];
  // return Array.from({ length: n - 1 }).reduce(fibonacci, [0, 1])[0];
}

console.log(nthFibonacci(-1));
console.log(nthFibonacci(0));
console.log(nthFibonacci(1));
console.log(nthFibonacci(2));
console.log(nthFibonacci(3));
console.log(nthFibonacci(4));
console.log(nthFibonacci(5));
console.log(nthFibonacci(6));
console.log(nthFibonacci(7));
console.log(nthFibonacci(8));
console.log(nthFibonacci(9));