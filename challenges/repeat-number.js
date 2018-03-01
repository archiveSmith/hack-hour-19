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

function repeatNumbers(array) {
        let Obj = {};
        for(var i = 0; i<array.length; i++) {
         if(Obj[array[i]]) {
           Obj[array[i]] += 1;
         } else {
          Obj[array[i]] = 1; 
         }
        }
        for(var key in Obj) {
          if(Obj[key] === 2) {
            return key;
          }
        }
        
        }

module.exports = repeatNumbers;
