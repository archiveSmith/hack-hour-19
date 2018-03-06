/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

 function maxSubarray(arr) {
 //return an array of all subArrays.
 let allSubArrays = [];
 let subArraySums = [];

 //push all subArrays into allSubArrays variable
 for (let i =1; i<arr.length; i++) {
   allSubArrays.push(arr.slice(0,i))
   allSubArrays.push(arr.slice(i,arr.length-1));
 }

 //push all subArraySums into subArraySums variable
   allSubArrays.forEach(x => {
     subArraySums.push((x.reduce((accum,curr)=> {
       return accum + curr;
     },0)));
   });

 // return allSubArrays last element after sorting lowest to highest
 return subArraySums.sort(function(a, b) {
   return a - b;
 })[subArraySums.length-1];
 }

module.exports = maxSubarray;
