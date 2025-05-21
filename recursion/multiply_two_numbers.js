function multiply(multiplicand, multiplier) {
  if (multiplier <= 0) {
    return 0;
  }

  return multiplicand + multiply(multiplicand, multiplier - 1);
}

console.log(multiply(3, 5));