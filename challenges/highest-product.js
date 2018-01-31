/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let sorted = array.sort((a, b) => b - a);
  if(array[0] && array[1] && array[2]) return array[0] * array[1] * array[2];
}
// console.log(highestProduct([1, 4, 2, 5])); -> 40

module.exports = highestProduct;
