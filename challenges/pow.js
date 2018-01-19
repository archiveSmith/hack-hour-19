/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  let result = 1;
  if (power === 0) {
    return base;
  }
  if (power === 1) {
    return result;
  }

  return result * pow(base, power - 1);
}

module.exports = pow;
