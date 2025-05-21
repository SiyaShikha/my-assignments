function sumOfTwoNumbers(a, b) {
  if (b === 0) {
    return 0;
  }

  return a + 1 + sumOfTwoNumbers(0, b - 1);

}

function sumOfTwoNumbers(a, b) {
  if (b === 0) {
    return a;
  }

  return sumOfTwoNumbers(a + 1, b - 1);
}


