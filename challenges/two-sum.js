/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    let hashTable = {};
  
    for (let i = 0; i < arr.length; i += 1) {
      let sumMinusElement = n - arr[i];
      
      if (hashTable[sumMinusElement] !== undefined) {
        return true;
      }
      
      hashTable[arr[i]] = true;
    }
    return false;
}

module.exports = twoSum;
