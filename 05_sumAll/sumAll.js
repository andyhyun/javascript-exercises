const sumAll = function(low, high) {
  if (high < low) {
    return sumAll(high, low);
  }

  if (
    typeof low !== 'number' ||
    typeof high !== 'number' ||
    low < 0 ||
    high < 0
  ) {
    return "ERROR";
  }

  let sum = 0;

  for (let i = low; i <= high; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
