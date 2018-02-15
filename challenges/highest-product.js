/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let sortedArr = array.sort((a, b) => {
    return Math.abs(a) < Math.abs(b);
  });

  console.log(sortedArr);

  let results = [];
  for (let i = 0; i < sortedArr.length; i++) {
    results.push(sortedArr[i] * sortedArr[i + 1] * sortedArr[i + 2]);
  }

  let result = results.filter(num => isNan(num)).sort((a, b) => {
    return a - b;
  });

  return result[0];
}

highestProduct([-1, 2, -4, 5, 2]);

module.exports = highestProduct;
