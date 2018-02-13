/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let max = Math.max(a,b);
  for(var i = 2; i <= max; i++ ){
    if(a % i == 0 && b % i == 0){
      return i;
    }
  }
  
}

console.log(gcd(12,19));
module.exports = gcd;
