/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let divisor;
    if (a > b) {
        divisor = a
    } else {
        divisor = b
    }
    for (let i = divisor; i > 0; i--) {
        if (a % i === 0 && b % i === 0) {
            return i
        }
    }

}
console.log(gcd(10, 9))

module.exports = gcd;