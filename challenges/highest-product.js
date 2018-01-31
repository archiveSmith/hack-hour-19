/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let newArr = array.sort((a, b) => {
        return b - a
    })
    return newArr[0] * newArr[1] * newArr[2];
}
console.log(highestProduct([4, 7, 1, 2]));

module.exports = highestProduct;
