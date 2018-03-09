/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if (!arr) return;

  let sums = [];

  for (let c = 1; c < arr.length + 1; c += 1) {
    for (let i = 0; i <= arr.length - c; i += 1) {
      let sum = 0;
      for (let j = i; j < c + i; j += 1) {
        sum += arr[j];
      }
      sums.push(sum);
    }
  }

  sums.sort((a,b) => a - b);
  console.log(sums);
  return sums[sums.length - 1];
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));

module.exports = maxSubarray;