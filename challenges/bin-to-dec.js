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


// Get the last digit of the binary number, call this digit the currentDigit.
// 	Make a variable, let's call it power.  Set the value to 0.
// Multiply the current digit with (2^power), store the result.
// 	Increment power by 1.
// Set the the currentDigit to the previous digit of the binary number.
// 	Repeat step 3 until all digits have been multiplied.
// 	Sum the result of step 3 to get the answer number.
//NOT COMPLETE- DO RECUSIVLEY
function binToDec(binary) {
	// return parseInt((binary + '')
	// 	.replace(/[^01]/gi, ''), 2);
	let arr = binary.split('');
	let result = [];
	let power = 0;
	let count = 0;
	while(count < arr.length) {
		let currentDigit = binary[count];
		result.push(currentDigit * (Math.pow(power, 2)));
		power++;
		count++;
	}
	console.log(result);
	return result.reduce(function (a, b){
		return a += b;
	}, 1);
}

console.log(binToDec('0'));   //-> 0
console.log(binToDec('11'));  //-> 3
console.log(binToDec('100')); //-> 4
console.log(binToDec('101')); //-> 5
console.log(binToDec('0101')); //-> 5

//module.exports = binToDec;
