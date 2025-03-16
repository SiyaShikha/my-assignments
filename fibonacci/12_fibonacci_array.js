function fibonacci(number) {
  const startingTerms = [0, 1];
  const fibonacciSequence = [];

  for (let index = 0; index < number; index++) {
    fibonacciSequence[index] = startingTerms[index];
    startingTerms[index + 2] = startingTerms[index] + startingTerms[index + 1];
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