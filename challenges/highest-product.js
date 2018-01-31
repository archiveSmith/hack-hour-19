/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  var arr = array.sort();
  return arr.slice(-3).reduce((a,b) => a*b,1);
}


module.exports = highestProduct;
