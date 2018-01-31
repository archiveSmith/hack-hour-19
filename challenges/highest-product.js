/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3 || !Array.isArray(array)) {return 0};
    let arr = array.sort((a,b) => b-a);
    let productNegative = arr[0] * arr[arr.length-1] * arr[arr.length-2];
    let productPositive = arr.slice(0,3).reduce((acc, ele) => acc * ele);
    return productPositive > productNegative ? productPositive : productNegative;
 }

module.exports = highestProduct;
