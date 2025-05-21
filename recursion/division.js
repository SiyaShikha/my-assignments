function divide(dividend, divisor) {
  if (dividend < divisor) {
    return 0;
  }

  return 1 + divide(dividend - divisor, divisor);
}

console.log(divide(10, 2));
console.log(divide(18, 3));
console.log(divide(0, 2));
console.log(divide(10, 1));