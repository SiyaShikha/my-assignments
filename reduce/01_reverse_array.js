// const insert = function (x,y) {
//   x.unshift(y);
//   return x;
// }

// const reverse = function (array) {
//   return array.reduce(insert, []);
// }

const reverse = function (array) {
  return array.reduce((x, y) => { x.unshift(y); return x; }, []);
}

console.log(reverse([1, 2, 3, 4, 5]));
