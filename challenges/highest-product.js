/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if(array.length < 3 || !Array.isArray(array)){
    return 0;
  }

    let sorted = array.sort().reverse();
    let result = [];
    // sorted.forEach(c => c > 0)
    return sorted[0] * sorted[1] * sorted[2];
}


module.exports = highestProduct;
