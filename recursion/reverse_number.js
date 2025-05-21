function divide(dividend, divisor) {
  if (dividend < divisor) {
    return 0;
  }

  return 1 + divide(dividend - divisor, divisor);
}

function countDigits(number) {
  if (number <= 0) {
    return 0;
  }
  
  return 1 + countDigits(divide(number, 10));
}

function reverseNumber(number) {
  if (number === 0) {
    return 0;
  }
  
  return (number % 10) * 10 ** (countDigits(number) - 1) + reverseNumber(divide(number, 10));
}