function divide(dividend, divisor) {
  if (dividend < divisor) {
    return 0;
  }

  return 1 + divide(dividend - divisor, divisor);
}

function sumOfDigits(number) {
  if (number <= 0) {
    return 0;
  }
  
  return number % 10 + sumOfDigits(divide(number, 10));
}