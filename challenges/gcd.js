/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const aFactors = getAllFactors(a);
  const bFactors = getAllFactors(b);
  return aFactors.reduce((biggestInBoth, aFactor) => {
    return (bFactors.indexOf(aFactor) < 0) ? biggestInBoth : aFactor;
  }, 1);
}

const getAllFactors = (num) => {
  const factors = [];
  for (let i = 2; i <= num; i++) if (num % i === 0) factors.push(i);
  return factors;
}
console.log(gcd(24, 6));
module.exports = gcd;