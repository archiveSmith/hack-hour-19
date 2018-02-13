/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    if (a === 0 || b === 0) return 1;
       let maxGcd = Math.abs(a - b);
    if (maxGcd === 0) return a;
    do {
        if (a % maxGcd === 0 && b % maxGcd === 0) return maxGcd;
      maxGcd--;
    }	while (maxGcd > 0)
  }

module.exports = gcd;