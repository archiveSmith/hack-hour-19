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
  let binNum = [8,4,2,1];
  let start = binNum.slice(-binary.length);
  let sum = 0;
  for(var i = 0; i < binary.length; i++){
    let curBin = binary[i];
    if(curBin === '0'){
      continue;
    } else {
      sum += start[i];
    }
  }
  return sum;
}
console.log(binToDec('11'));

module.exports = binToDec;
