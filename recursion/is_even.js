function isOdd(number) {
  if (number < 2) {
    return number === 0;
  }

  return isOdd(number - 2);
}