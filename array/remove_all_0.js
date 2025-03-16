const array = [0, 1, 2, 3, 0, 4, 5, 0, 6, 0];
const arrayCopy = Array.from(array);
console.log(array);

for (const index in array) {
  const popedValue = arrayCopy.pop();
  if (popedValue !== 0) {
    arrayCopy.unshift(popedValue);
  }
}

console.log(arrayCopy);
