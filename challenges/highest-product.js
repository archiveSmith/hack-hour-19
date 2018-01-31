/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function sortNumber(a,b) {
  return a - b;
}

function highestProduct(array) {
  if (!Array.isArray(array) || array.length < 3) return 0;
  const sortedArr = array.sort(sortNumber).slice(-4);
  sortedArr[0] * sortedArr[2] < 0 && sortedArr[1] * sortedArr[3] < 0 ? sortedArr.pop() : sortedArr.shift();
  return sortedArr.reduce((a, b) => a*b);
}


module.exports = highestProduct;
