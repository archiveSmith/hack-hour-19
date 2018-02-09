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

function permPalin(str) {
	if (typeof str !== 'string') return false;
	let hash = {};
	let chars = str.split('');
	chars.forEach(function(char){
		if (hash[char]) { hash[char] ++}
		else {hash[char] = 1}
	});

	let odds = 0;

	Object.keys(hash).forEach(function(char){
		if (hash[char] % 2 === 1){odds ++}
	});

	return odds < 2;
}

function tests() {
	console.log(permPalin('abab'));
	console.log(permPalin('cbaba'));
	console.log(permPalin('cbac'));
	console.log(permPalin('a'));
	console.log(permPalin(''));
	console.log(permPalin(8678));

}

//tests();

module.exports = permPalin;
