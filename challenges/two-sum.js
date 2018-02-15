/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for (
    let i = 0, j = arr.length - 1;
    i < Math.round(arr.length - 1 / 2);
    i++, j--
  ) {
    if (arr[i] + arr[j] === n) return true;
  }
  return false;
}

module.exports = twoSum;
