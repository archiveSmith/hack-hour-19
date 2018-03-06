/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

 function twoSum(arr, n) {
   /*I initially see this problem as a nested
   for Loop permutations problem...
   there surely is a better solution

   The initial forLoop isn't what makes me wonder.
   It's the .includes() where I have to go through
   that entire solutions array.

   I can't imagine anything different for now.
   And atleast this one works

   */
   let arrayOfAdditionResults = [];

   for(let i = 0; i<arr.length-1; i++) {
     arrayOfAdditionResults.push(arr[i]+arr[i+1]);
   }
   return arrayOfAdditionResults.includes(n);
 }
module.exports = twoSum;
