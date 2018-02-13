/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
	let smaller;
	if(a<b){
		smaller = a;
	}
	else{
		smaller = b; 
	}
	while(smaller>0){
		if((a%smaller===0) && (b%smaller===)){
			return smaller; 
		}
		smaller--; 
	}
	return 0;
}

module.exports = gcd;