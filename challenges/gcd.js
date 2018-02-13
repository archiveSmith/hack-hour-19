/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let lowNum;
  a < b ? lowNum = a: lowNum = b;
  let lowNumHalf = Math.floor(lowNum / 2)

  for (let i = lowNumHalf; i > 0; i--) {
    if (a % i === 0 && b % i === 0) return i;
  }
}

module.exports = gcd;