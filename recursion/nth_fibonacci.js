function fibonacciTermAtIndex(reqTermIndex, currentTerm, nextTerm) {
  if (reqTermIndex === 1) {
    return currentTerm;
  }

  return (fibonacciTermAtIndex(reqTermIndex - 1, nextTerm, currentTerm + nextTerm));
}

function fibonacci(n) {
  const currentTerm = 0;
  const nextTerm = 1;
  return fibonacciTermAtIndex(n, currentTerm, nextTerm);
}