/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
// Using an object to store seen numbers O(n) space/time
function uniqueNumber(array) {
 const obj = array.reduce((acc, num) => {
  if (!acc[num]) acc[num] = true;
  else delete acc[num];
  return acc;
 }, {});
 return Object.keys(obj)[0];
}
​
// // Bitwise XOR O(n) time - O(1) space
// function uniqueNumber(array) {
//  var result = 0;
//  for (var i = 0; i < array.length; i++) {
//   result = result ^ array[i];
//  }
//  return result;
// }

module.exports = uniqueNumber;
