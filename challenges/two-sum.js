/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    const hashTable = {};
    for (let i = 0; i < arr.length; i++) {
        const diff = n - arr[i];
        if (hashTable[diff]) return true;
        else hashTable[arr[i]] = arr[i];
    }

    return false;
}

module.exports = twoSum;
