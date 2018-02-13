/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  function recurse(i){
    if(a%i === 0 && b%i === 0){
      return i
    }
    if(--i === 0){return}
    return recurse(i)
  }
  return recurse(Math.min(a,b))
}


module.exports = gcd;
