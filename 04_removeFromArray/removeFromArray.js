const removeFromArray = function(arr, ...items) {
  for (const item of items) {
    itemIndex = arr.indexOf(item);
    if (itemIndex !== -1) {
      arr.splice(itemIndex, 1);
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
