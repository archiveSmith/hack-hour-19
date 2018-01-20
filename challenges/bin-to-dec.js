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
  const length = binary.length - 1;
  let currentPosition = length;

  let sum = 0;

  while (currentPosition >= 0) {
    const value = 2 ** currentPosition;

    if (binary[length - currentPosition] === '1') {
      sum += value;
    }

    currentPosition -= 1;
  }
  return sum;
}

module.exports = binToDec;
