function max(a, b) {
  return a > b ? a : b;
}

function min(a, b) {
  return a < b ? a : b;
}

function maxOfThree(a, b, c) {
  return max(max(a, b), c);
}

function minOfThree(a, b, c) {
  return min(min(a, b), c);
}

function secondGreatestOfThree(a, b, c) {
  const min = minOfThree(a, b, c);
  const max = maxOfThree(a, b, c);
  return (a + b + c) - (min + max);
}