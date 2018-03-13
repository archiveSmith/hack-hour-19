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
    let container = array.reduce(function(result, number) {
        result[number] = (result[number] || 0) + 1;
        return result;
       }, {});
       
       for (let key in container) {
         if (container[key] === 1) {
           return key;
         }
       }
}

module.exports = uniqueNumber;
