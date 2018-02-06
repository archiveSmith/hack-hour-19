/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if(array.length < 3 || !Array.isArray(array)){
    return 0;
  }

    let sorted = array.sort((a,b) => b-a);

    let result = [];
    // sorted.forEach(c => c > 0)
    return sorted[0] * sorted[1] * sorted[2];
}
console.log(highestProduct([2,4,-2,-8,-5,-7]));

module.exports = highestProduct;
