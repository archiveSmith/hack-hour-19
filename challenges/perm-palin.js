/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function palindrome(str) {
	return str.split('').reverse().join('');
}


function permPalin(str) {
	if(str.length == 1) {
		return true;
	}

	let reversed = palindrome(str);
	console.log(reversed);
	for(var i = 0; i < str.length-1; i++){
		for(var j = 0; j < reversed.length-1; j++){
			if(str[i] + str[i+1] == reversed[j] + reversed[j+1]){
				return true;
			}
		}
	}
	return false;

}
console.log(permPalin('edcba'));
module.exports = permPalin;
