function fibonacci(number) {
  const fibonacciSequence = [];
  let previousTerm = 0;
  let currentTerm = 1;

  for (let index = 0; index < number; index++) {
    fibonacciSequence[index] = previousTerm;
    const nextTerm = previousTerm + currentTerm;
    previousTerm = currentTerm;
    currentTerm = nextTerm;
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
}

testAll();