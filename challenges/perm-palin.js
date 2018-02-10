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

// Build permutations character by character

// const permPalin = (str, permutation = '', hasPermPal = false) => {

// };

// console.log(isPalindrome('abab'));

console.log('Expect true -', permPalin('abab'));
console.log('Expect true -', permPalin('cbaba'));
console.log('Expect false -', permPalin('cbac'));
console.log('Expect true -', permPalin('a'));
module.exports = permPalin;
