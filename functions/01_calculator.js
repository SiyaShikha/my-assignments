const add = function (x, y) {
  return x + y;
}
const sub = function (x, y) {
  return x - y;
}
const product = function (x, y) {
  return x * y;
}
const div = function (x, y) {
  return x / y;
}

const mod = function (x, y) {
  return x % y;
}

const operations = [add, sub, product, div, mod];

const doOperation = function (operationChoice, operand1, operand2) {
  return operations[operationChoice](operand1, operand2);
}

const operationChoice = +prompt('Enter the Operation (0:add, 1:sub, 2:product, 3:div, 4:mod)');
const [operand1, operand2] = [+prompt('Enter first number : '), +prompt('Enter second number : ')];

console.log(doOperation(operationChoice, operand1, operand2));