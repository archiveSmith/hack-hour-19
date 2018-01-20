/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function power(base, exponent) {
  return exponent == 0 ? 1 : base * power(base, --exponent);
}

module.exports = pow;
