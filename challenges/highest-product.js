/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if(!array.length) return false;
    let sum = 1;
    array.sort((a,b) => b > a);
    array.forEach((num, i) => {
        if (i < 3) sum *= num;
    });
    return sum;
}


module.exports = highestProduct;
