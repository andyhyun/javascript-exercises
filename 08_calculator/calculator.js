const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	return nums.reduce((total, num) => total += num, 0);
};

const multiply = function(nums) {
  return nums.reduce((product, num) => product *= num, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(n) {
	let result = 1;
  for (let i = 2; i <= n; i++) {
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
  factorial
};
