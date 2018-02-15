/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!arr || arr.length === 1) return false;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) return true;
    }
  }
  return false;
}

const arr = [-2, -1, 2, 3, 7];
const targetT = 1;
const targetF = 40;
console.log('Expect true:', twoSum(arr, targetT));
console.log('Expect false:', twoSum(arr, targetF));

module.exports = twoSum;
