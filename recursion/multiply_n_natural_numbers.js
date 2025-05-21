function productOfNNaturalNumbers(n) {
  if (n === 1) {
    return 1;
  }

  return n * productOfNNaturalNumbers(n - 1);
}