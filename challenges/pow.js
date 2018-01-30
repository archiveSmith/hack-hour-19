/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, original) {
  if (!original) {
  	original = base;
  }
  if (power === 1) {
  	return base;
  }
  return pow(base * original, power - 1, original);
}

//console.log(pow(2, 5)); //32

module.exports = pow;


