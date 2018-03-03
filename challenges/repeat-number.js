/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

 // i'm not yet using the fact that every number in that range appears once.
function repeatNumbers(array) {
  // brute force:
  const n = array.length;
  // const storage = [];
  // for (let i=0; i<n; i++) {
  //   if (storage.includes(array[i])) {
  //     return array[i];
  //   } else {
  //     storage.push(array[i]);
  //   }
  // }

  // optimized
  const gaussSum = 0.5*n*(n+1);
  const actualSum = array.reduce((a, b) => a+b);
  return actualSum - gaussSum;

}

console.log(repeatNumbers([1,2,5,4,6,5]));
module.exports = repeatNumbers;
