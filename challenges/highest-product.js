/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const highestNum = array
    .sort((a, b) => {
      return a - b;
    })
    .slice(-3);
  return highestNum.reduce((x, y) => {
    return (x *= y);
  });
}

module.exports = highestProduct;
