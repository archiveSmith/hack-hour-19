/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
        let result = [];
        
        for(var i = 0; i<arr.length; i++ ) {
          for( var j = i+1; j<arr.length; j++) {
            if(arr[j] === (n - arr[i])) {
              result.push([arr[i], arr[j]])
            }
          }
        }
        console.log(result.length);
        console.log(result);
        return (result.length > 0 ? true : false);
        }

module.exports = twoSum;
