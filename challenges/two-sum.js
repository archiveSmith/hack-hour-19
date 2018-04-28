/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {

  if (!Array.isArray(arr)) {return false};
  for (num of arr) {
    if (typeof num !== 'number') { return false};
  }

  let arr2 = arr.slice().sort(function(a, b){return a - b});
  //console.log(arr2);

  let left = 0;
  let right = arr2.length-1;

  while (left < right) {
    let sum = arr2[left] + arr2[right];
    if (sum === n) {return true }
    else if (sum < n) {left ++}
    else if (sum > n) {right --}
  }
  return false;
}

function tests() {
  let arr = [1, 5, 9, 4, 11];
  console.log(twoSum(arr, 10));
  console.log(twoSum(arr, 8));
  console.log(twoSum(arr, 1));
  console.log(twoSum(arr, 15));
  console.log(twoSum(arr, 20));
}

//tests();

module.exports = twoSum;
