/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
    let result;
    array = array.sort((a, b) => {
        return a - b;
    })
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            return array[i];
        } else {
            return undefined;
        }
    }

}
console.log(repeatNumbers([1, 2, 3, 4, 4, 5]))
module.exports = repeatNumbers;
