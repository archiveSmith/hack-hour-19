/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3 || !Array.isArray(array)) { return 0; }
  let arraySort = array.sort((a,b) => {return b-a});
  let answer = arraySort[0] * arraySort[1] * arraySort[2];
  return answer;
}


module.exports = highestProduct;
