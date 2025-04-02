const fibonacci = function (num) {
  // First Solution:
  // if (typeof num === "string") num = parseInt(num);
  // if (num === 0) return 0;
  // if (num === 1) return 1;
  // if (num < 0) return "OOPS";
  // let prev = 0;
  // let cur = 1;
  // for (let i = 2; i <= num; i++) {
  //   let t = cur;
  //   cur += prev;
  //   prev = t;
  // }
  // return cur;

  if (num < 0) return "OOPS";
  num = typeof num === "number" ? num : parseInt(num);
  let fib = [0, 1];
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
