/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let sorted = array.sort().reverse();
    return sorted[0] * sorted[1] * sorted[2];
}
// console.log(highestProduct([2,3,6,1]));``

module.exports = highestProduct;
