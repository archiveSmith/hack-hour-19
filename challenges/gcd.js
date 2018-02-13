/**
 * Given two integers, return the greatest common divisor.
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let div = b;
  if (b > a) div = a;
  while (div > 0) {
    if (a % div === 0 && b % div === 0) return div;
    if (a === div || b === div) div = Math.floor(div / 2);
    else div -= 1;
  }
  return 1;
}

module.exports = gcd;
