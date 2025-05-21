function multiply(multiplicand, multiplier) {
  let multiperCopy = multiplier;
  let product = 0;

  while (multiperCopy > 0) {
    const power = Math.floor(Math.log2(multiperCopy));
    product += multiplicand << power;
    multiperCopy -= Math.floor(Math.pow(2, power));
  }

  return product;
}