/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {

    if (a%b === 0) return b;
    if (b%a === 0) return a;


    let gd = 0;
    let length = (a < b) ? a : b;
    length = Math.ceil(Math.sqrt(length));

    for (let i = 1; i <= length; i++) {
        if (a%i === 0 && b%i === 0) {
            gd = i;
        }
    }

    return gd;
}

module.exports = gcd;