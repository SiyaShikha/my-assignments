function max(a,b) {
  return a > b ? a : b;
}

function min(a,b) {
  return a < b ? a : b;
}

function averageOfTwoNumbers(a, b) {
  if (a === b) {
    return a;
  }

  return averageOfTwoNumbers(a + 0.5, b - 0.5);
}

function average(x,y) {
  return averageOfTwoNumbers(min(x,y), max(x,y));
}