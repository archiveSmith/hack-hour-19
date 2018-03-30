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
    if (binary = '') return undefined;
    const reverseBin = binary.split('').reverse();
    // console.log(reverseBin);
    let sum = 0;
    let base = 1;
    for  (let i = 0; i < reverseBin.length; i++){
        sum += reverseBin[i] * base;
        base *= 2;
    }
    return sum;
}

// function decToBin(decimal) {
//     if (decimal === 0) return 0;
//     if (decimal === 1) return 1;

//     let nearestTwo = 1;
//     while (nearestTwo * 2 <= decimal){
//         nearestTwo *= 2;
//     }
//     let binaryIndex = Math.log2(nearestTwo);
//     let binArray = new Array(binaryIndex+1).fill(0);
//     binArray[0] = 1;
//     let binString = binArray.join('');
//     let binNum = Number(binString);

//     return binNum + decToBin(decimal - nearestTwo);
// }



module.exports = binToDec;
