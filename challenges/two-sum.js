/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  const arrlen = arr.length;
  if (arrlen < 2) return false;
  for (let i = 0; i < arrlen; i++){
    for (let j = i + 1; j < arrlen; j++){
      if (i + j === n) return true;
    }
  }
  return false;
}

module.exports = twoSum;
