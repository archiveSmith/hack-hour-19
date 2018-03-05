/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let highestCommonDivisor = 0;
  if (Math.max(a,b) % Math.min(a,b) === 0) { 
    highestCommonDivisor = Math.min(a,b) 
  } else {
    for (let i = 0; i < Math.min(a,b)/2 + 1; i++) {
      if (a % i === 0 && b % i === 0) {
        highestCommonDivisor = i;
      }
    }
  }
  return highestCommonDivisor;
}

// brute force - go through every
//  possible number from min num
//  to zero until you find one that
//  both a and b are divisible by
const gcd = (a, b) => {
  var div = Math.min(a, b);
  for (var i = div; i > 0; i--) {
    if (a % i === 0 && b % i === 0) return i;
  }
  return 1;
};

// recursive: euclidean algorithm - https://en.wikipedia.org/wiki/Euclidean_algorithm
/* 
https://en.wikipedia.org/wiki/Greatest_common_divisor
To compute gcd(48,18), divide 48 by 18 to get a quotient of 2 and a remainder of 12. Then divide 18 by 12 to get a quotient of 1 and a remainder of 6. Then divide 12 by 6 to get a remainder of 0, which means that 6 is the gcd. Note that we ignored the quotient in each step except to notice when the remainder reached 0, signalling that we had arrived at the answer. Formally the algorithm can be described as:
*/

let iterations = 0;
const gcd = (a, b) => {
  // check for invalid input
  if (typeof a !== 'number' || typeof b !== 'number') return;

  // base case:
    // b is 0 so we return 
    // the abs value of a
  if (!b) return Math.abs(a);

  // recursive case:
    //  return the gcd where a is
    //  the min value between a & b
    //  and b is the remainder of a / b
  return gcd(Math.min(a, b), a % b);
};


module.exports = gcd;