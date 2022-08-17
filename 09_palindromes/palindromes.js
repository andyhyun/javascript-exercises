const palindromes = function (str) {
  newStr = str.replace(/[^a-z]/gi, '').toLowerCase();
  for (let i = 0; i < newStr.length; i++) {
    if (newStr.charAt(i) !== newStr.charAt(newStr.length - i - 1)) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
