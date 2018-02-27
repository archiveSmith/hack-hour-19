/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3 || !Array.isArray(array)) {
        return 0;
    }
    let newArr = array.sort((a, b) => {
        return b - a
    })
    let result = newArr[0] * newArr[1] * newArr[2];
    if (result < 0) {
        result = result * -1
    }
    return result;
}
console.log(highestProduct([-4, 2, 1]));

module.exports = highestProduct;
