const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((sum, val) => sum + val, 0);
};

const multiply = function (arr) {
  let result = 1;
  for (let val of arr) {
    result *= val;
  }
  return result;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let result = 1;
  for (let i = a; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
