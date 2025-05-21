function sumOfOddNumbers(startOfRange, endOfRange) {
  if (startOfRange % 2 === 0) {
    startOfRange += 1;
  }
  if (startOfRange > endOfRange) {
    return 0;
  }
  return startOfRange + sumOfOddNumbers(startOfRange + 2, endOfRange);
}