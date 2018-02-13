/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let highestCommonDivisor = 0;
    if (Math.max(a,b) % Math.min(a,b) === 0) { 
      highestCommonDivisor = Math.min(a,b) 
    } else {
      for (let i = 0; i < Math.min(a,b)/2; i++) {
        if (a % i === 0 && b % i === 0) {
          highestCommonDivisor = i;
        }
      }
    }
    return highestCommonDivisor;
  }
   
 

module.exports = gcd;