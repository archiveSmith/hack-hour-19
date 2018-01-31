/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if(array.length < 3) return 0;
  if(!Array.isArray(array)) return 0;

  let sorted = array.sort((a, b) => b - a);
  if(array[0] && array[1] && array[2]) return array[0] * array[1] * array[2];
}
// console.log(highestProduct([1, 4, 2, 5]));// -> 40
// console.log(highestProduct([1,2,3]));
// console.log(highestProduct({})); 

module.exports = highestProduct;
