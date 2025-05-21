function logarithm(base, value) {
  if (value <= base) {
    return 1;
  }

  return 1 + logarithm(base, value/base);
}

console.log(logarithm(2,8));