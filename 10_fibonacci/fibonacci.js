const fibonacci = function(n) {
  n = parseInt(n);
  if (n < 0) return "OOPS";
  if (n < 2) return n;
  let firstPreceding = 1;
  let secondPreceding = 0;
  let result = 0;
  for (let i = 2; i <= n; i++) {
    result = firstPreceding + secondPreceding;
    secondPreceding = firstPreceding;
    firstPreceding = result;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
