/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let array = arr.slice();
  if (array.length === 1) {
    return array[0] === n;
  }

  const num = array.shift();
  const flag = array.reduce((acc, cur) => {
    return cur + num === n ? true : acc;
  }, false);

  if (flag) return flag;

  return twoSum(array, n);
}

module.exports = twoSum;
