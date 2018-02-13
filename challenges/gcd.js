/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {

let min = Math.min(a,b);
let gcd;

for (let i=1; i<=min; i++) {
    if (a%i === 0 && b%i === 0) {
        gcd = i;
    }
}
return gcd;
}

module.exports = gcd;