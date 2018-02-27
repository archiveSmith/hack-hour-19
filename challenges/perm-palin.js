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
  const obj = {};
  let numOdds = 0;

  for (let i = 0, ilen = str.length; i < ilen; i += 1) {
    obj[str[i]] = (obj[str[i]] += 1) || 1;
  }

  for (let value of Object.values(obj)) {
    numOdds += value % 2;
    if (numOdds > 1) return false;
  }
  return true;
}

module.exports = permPalin;
