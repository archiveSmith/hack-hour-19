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

    let arr = binary.split("");
    for (i = arr.length - 1; i >= -1; i--) {
        if (arr[i] === "0" && arr === arr[0]) {
            return i
        } else if (arr[-1] === undefined) {
            return i + 1
        } else {
            arr.pop(arr[i])
            return i + binToDec(arr);
        }
    }
}
console.log(binToDec("11"))





module.exports = binToDec;
