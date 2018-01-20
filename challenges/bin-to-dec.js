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
   let bins = binary.split('').map(Number);
   var acc = 0;
   for (let i = 0, j=bins.length-1; i < bins.length; i++, j--) {
     if (bins[i] === 1) {
       acc += Math.pow(2, j);
     }
   }
   return acc;
 }

module.exports = binToDec;
