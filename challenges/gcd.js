/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let max = Math.max(a,b);
  let greatest = [];
  for(var i = 2; i <= max; i++ ){
    if(a % i == 0 && b % i == 0){
      greatest.push(i);
    }
  }
  if(greatest.length == 0) {
    return 1;
  }
  return Math.max(...greatest);
}

// console.log(gcd(44,8));
module.exports = gcd;
