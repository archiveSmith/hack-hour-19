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
  // if it were, there would be either at MOST an odd number of one character
  // count the frequency of each character
  let frequencies = {};
  for (let i=0; i<str.length; i++){
    if (!frequencies.hasOwnProperty(str.charAt(i))) {
      frequencies[str.charAt(i)] = 1;
    } else {
      frequencies[str.charAt(i)]++;
    }
  }
  // if more than one frequency is odd, return false
  let oddCount=0;
  for (let el in frequencies) {
    if (frequencies[el] % 2 === 1) {
      oddCount++;
    }
  }

  return oddCount < 2;
}

module.exports = permPalin;