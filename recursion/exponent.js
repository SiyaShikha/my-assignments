function exponent(base, power) {
  if (power < 1) {
    return 1;
  }
  
  return base * exponent(base, power - 1);
}

console.log(exponent(3, 5));