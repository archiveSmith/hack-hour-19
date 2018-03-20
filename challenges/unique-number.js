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
 function uniqueNumber(array) {
   //not good enough. though it does compile.
   //indexOf() gives you first instance of value
   //lastIndexOf() works as expected
   //so we are only returning the instance where the two match.
   //the .find is O(n)
   //then the indexOf is O(n)
   //then i believe the lastIndexOf() is O(n) also...
   //is that O(n3)?
   return array.find(function(value){
     return array.indexOf(value) === array.lastIndexOf(value);
   }) || -1;
 }

module.exports = uniqueNumber;
