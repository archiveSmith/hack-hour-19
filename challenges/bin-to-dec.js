/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  //parseInt takes two parameters
  //a string and a radix
  //if you pass it a non-string as the first argument,
  // it will use ToString for you and strip whitespace first.
  //the second argument must be an integer between 2 and 36
  //ALWAYS use the second parameter just to be clear to other devs
  //also different browser implementations might act differently
  // but mostly would default to base10, the numbering system
  //us lowly humans are more accustomed to.

  //passing 8 as the second argument would get us octal
  //passing 16 as the second argument would get us hexidecimal

  //very small or large numbers (using the 'e' notation) will work unexpectedly
  //parseInt is NOT a substitute for Math.floor

  //wow I had never used this before and this could be incredibly useful.
  //there are surely gonna be times that I'm gonna use this in the future
let digit = parseInt(binary, 2);
return digit;
}

module.exports = binToDec;
