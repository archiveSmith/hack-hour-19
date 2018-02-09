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
  str.split('').forEach(el => {
    if (!obj[el]) {
      obj[el] = 1
    } else {
      obj[el]++;
    }
  })

  let odd = 0;
  for (prop in obj) {
    if (obj[prop] % 2 !== 0) odd++;
  }

  return odd > 1;
}

module.exports = permPalin;