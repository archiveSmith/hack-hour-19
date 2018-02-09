/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    let strForward = str.split('');
    let strObjToArr = [];
  
    let strObj = strForward.reduce((result, letter) => {
      result[letter] = (result[letter] || 0) + 1;
      return result;
    }, {});
  
    for (let key in strObj) {
      strObjToArr.push(strObj[key]);
    }
    
    strObjToArr.sort((a,b) => {return b-a});
  
    if (strObjToArr.length === 1) {
      return true;
    }
    
    else { 
      for (let i = 0; i < strObjToArr.length; i += 1) {
        if (strObjToArr[i] === strObjToArr[i + 1]) {
          return true;
        }
        return false;
      }
    }
}

module.exports = permPalin;