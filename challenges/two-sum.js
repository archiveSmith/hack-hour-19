/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let num;
  for (let i = 0; i < arr.length; i += 1) {
    num = arr[i];
    if (arr.indexOf(n - num) !== -1) return true;
  }
  return false;
}

module.exports = twoSum;
