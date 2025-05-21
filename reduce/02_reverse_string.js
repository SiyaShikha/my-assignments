// const concat = function (x, y) {
//   return y + x;
// }

// const reverse = function (string) {
//   const arrayOfChars = string.split('');
//   return arrayOfChars.reduce(concat, []);
// }

const reverse = function (string) {
  return string.split('').reduce((x, y) => y + x, []);
}

console.log(reverse('abcdef'));