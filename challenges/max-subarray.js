/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if (!arr) return undefined;
  if (arr.length === 1) return arr[0];
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    for (let j = i + 1; j <= arr.length; j++) {
      if (sum > maxSum) maxSum = sum;
      sum += arr[j];
    }
  }
  return maxSum;
}

// console.log('Expect 18:', maxSubarray([1, -2, 3, 10, -4, 7, 2, -5])); // -> 18 from [3, 10, -4, 7, 2]
// console.log('Expect 35:', maxSubarray([15,20,-5]));
// console.log('Expect 39:', maxSubarray([-1,15,20,-5,-1,10])); //  -> 39
// console.log('Expect -1:', maxSubarray([-1,-2,-3])); //  
// console.log('Expect -1:', maxSubarray([-6])); //  

module.exports = maxSubarray;
