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
  let mult = 1;
  let dec = 0;
  for (let i = binary.length-1; i >=0; i--) {
    let digit = parseInt(binary.charAt(i))
    dec += digit * mult;
    mult *= 2;
  }
  return dec;
}

function decToBin(binary) {

}

function decToHex(binary) {

}

function tests() {
  console.log(binToDec('1001'));
  console.log(binToDec('0'));
  console.log(binToDec('11'));
  console.log(binToDec('100'));
  console.log(binToDec('101'));
  console.log(binToDec('0101'));
  /*
  binToDec('0')   -> 0
   * 	binToDec('11')  -> 3
   * 	binToDec('100') -> 4
   * 	binToDec('101') -> 5
   *  binToDec('0101') -> 5
   */
}
tests()
//module.exports = binToDec;
