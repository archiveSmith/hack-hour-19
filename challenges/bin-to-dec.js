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

// function binToDec(binary) {
//   let decSum = 0;
//   const numArr = binary.split('').reverse();
//   numArr.forEach((elem, i) => {
//     const number = Number(elem);
//     if (number !== 0) {
//       decSum += 2 ** i;
//     }
//   });
//   return decSum;
// }

function binToDec(binary) {
  if (binary === '') {
    return 'No string value';
  }
  const numArr = binary.split('').reverse();

  function helper(i) {
    if (i === numArr.length - 1) {
      return Number(numArr[i]) * (2 ** i);
    }
    return (Number(numArr[i]) * (2 ** i)) + (helper(i + 1));
  }

  return helper(0);
}

module.exports = binToDec;
