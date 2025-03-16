function nthFibonacciTerm(n) {
  let previousTerm = 0;
  let currentTerm = 1;

  for (let term = 1; term < n; term++) {
    const nextTerm = previousTerm + currentTerm;
    previousTerm = currentTerm;
    currentTerm = nextTerm;
  }

  return previousTerm;
}

function isPassed(expected, actual) {
  return expected === actual ? "✅" : "❌";
}

function makeMessage(noOfTerm, expected, actual) {
  const contextSegment = "Fibonacci Term " + noOfTerm;
  const expextedSegment = "\n Expected = " + expected;
  const actualSegment = "\n Actual = " + actual + "\n";

  return contextSegment + expextedSegment + actualSegment;
}

function testNthFibonacciTerm(noOfTerm, expected) {
  const actual = nthFibonacciTerm(noOfTerm);
  const message = makeMessage(noOfTerm, expected, actual);
  console.log(isPassed(expected, actual), message);
}

function testAll() {
  testNthFibonacciTerm(1, 0);
  testNthFibonacciTerm(2, 1);
  testNthFibonacciTerm(3, 1);
  testNthFibonacciTerm(4, 2);
  testNthFibonacciTerm(5, 3);
  testNthFibonacciTerm(0, 0);
}

testAll();
