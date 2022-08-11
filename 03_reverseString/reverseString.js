const reverseString = function(string) {
  result = "";

  for (let i = 1; i <= string.length; i++) {
    result += string.charAt(string.length - i);
  }

  return result;
};

// Do not edit below this line
module.exports = reverseString;
