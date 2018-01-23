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
  if (!binary.length) return 0;
  let addThis = 0;
  if (binary[0] === '1') addThis = Math.pow(2, binary.length - 1);
  return addThis + binToDec(binary.slice(1));
}

console.log(binToDec('101'));
module.exports = binToDec;
