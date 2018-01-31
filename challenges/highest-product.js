/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3 || !Array.isArray(array)) {
    return 0;
  } else {
    var arr = array.map(Math.abs).sort();
    return arr.slice(-3).reduce((a,b) => a*b,1);
  }
}


module.exports = highestProduct;
