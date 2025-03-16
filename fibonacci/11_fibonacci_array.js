function fibonacci(number) {
  const fibonacciSequence = [0, 1];

  if (number < 2) {
    return number === 1 ? [0] : [];
  }

  for (let i = 2; i < number; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
  }

  return fibonacciSequence;
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }

  return true;
}

function isPassed(expected, actual) {
  return areEqual(expected, actual) ? "✅" : "❌";
}

function testFibonacci(number, expected) {
  const actual = fibonacci(number);
  console.log(isPassed(expected, actual), expected, actual);
}

function testAll() {
  testFibonacci(5, [0, 1, 1, 2, 3]);
  testFibonacci(1, [0]);
  testFibonacci(2, [0, 1]);
  testFibonacci(3, [0, 1, 1]);
  testFibonacci(6, [0, 1, 1, 2, 3, 5]);
  testFibonacci(0, []);
}

testAll();