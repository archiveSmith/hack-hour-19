/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] + arr[k] === n) return true;
    }
  }
  return false;
}

// console.log(twoSum([1, 2, 3, 4, 5], 3));

module.exports = twoSum;
