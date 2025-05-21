function sumOfNNaturalNumbers(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumOfNNaturalNumbers(n - 1);
}