const count = function (upto) {
  let x = 0;
  return function () {
    if (x > upto) {
      x = 0;
    }
    return x++;
  };
};

const _cycle = function (array) {
  let x = 0;
  return function () {
    if (x >= array.length) {
      x = 0;
    }
    return array[x++];
  };
};

const repeatChar = function (char) {
  return function (times) {
    return char.repeat(times);
  };
};

const cycle = function (array) {
  let x = -1;
  return function () {
    x++;
    return array[x % array.length];
  };
};

const next = cycle(["rama", "raghav"]);

console.log(
  ["siya", "sita", "jaanki", "vaidehi"].map((x) => [x, next()]).join("\n"),
);
