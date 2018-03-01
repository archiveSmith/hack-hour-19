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
    let stringNumArr = [];
    array.forEach((elem) => {stringNumArr.push(elem.toString())});
    
    let numObj = stringNumArr.reduce(function(result, elem) {
      result[elem] = (result[elem] || 0) + 1;
      return result;
    }, {});
    
    for (let key in numObj) {
      if (numObj[key] >=2) {
        return key;
      }
    }
}

module.exports = repeatNumbers;
