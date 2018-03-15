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
        let myObj = {};
        for(var i = 0; i<array.length; i++) {
          if(myObj[array[i]]) {
            myObj[array[i]] += 1;
          }  else  {
            myObj[array[i]] = 1;
          }
        }
          for(var key in myObj) {
            if(myObj[key] === 1) {
              return key;
            }
          }
        }
module.exports = uniqueNumber;
