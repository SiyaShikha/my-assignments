function min(a, b) {
  return a < b ? a : b;
}

function minOfThree(a, b, c) {
  return min(min(a, b), c);
}