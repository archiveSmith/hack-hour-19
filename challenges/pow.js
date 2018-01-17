/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  let num =  base;
  num * base;
  if(power === 1) return num;

  return num * pow(base, power-1);
}
console.log(pow(3, 3));
module.exports = pow;
