/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */
//base = 10
//power = 3
//return 1000
function pow(base, power) {
  if (base === 0) return 0;
  if (base === 1 || power === 0) return 1;
  if (power === 1) return base;
  return base * pow(base, power - 1);
  //10 * pow(10, 3 - 1)
  //10 * 10 * pow(10, 2 - 1)
  //10 * 10 * 10 * 1
}

module.exports = pow;
