/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  // Save divisors
  let arrA = [];
  let arrB = [];

  // Find all divisors of a
  for (divisor = 1; divisor <= (a / 2); divisor += 1) {
    if (a % divisor === 0) arrA.push(a / divisor)
  }

  // Find all divisors of b
  for (divisor = 1; divisor <= (b / 2); divisor += 1) {
    if (b % divisor === 0) arrB.push(b / divisor)
  }

  // Find the greatest common divisor
  for (let i = 0, j = 0; i < arrA.length; i += 1) {
    j = 0;
    while (arrA[i] <= arrB[j]) {
      if (arrA[i] === arrB[j]) return arrA[i]
      else j++
    }
  }
}

console.log(gcd(180, 80));

module.exports = gcd;