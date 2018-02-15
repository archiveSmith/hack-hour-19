/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    let arrCopy = arr;
    for (let i=0; i<arrCopy.length; i++) {
        for (let j=1; j<arrCopy.length; j++) {
            if (arrCopy[i] + arrCopy[j] === n) return true;
            }
 		arrCopy.shift();
        }
    return false;
}

module.exports = twoSum;
