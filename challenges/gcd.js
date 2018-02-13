/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if (b === 0 || !b) return a;
  return gcd(b, a % b);
}

// console.log(gcd(10, 8));
// console.log(gcd(10, 9));
// console.log(gcd(15, 20));

module.exports = gcd;
