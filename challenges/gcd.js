/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {

  let i = 2;
  let dem = 1;
  while (i <= a && i <= b) {
    let aDiv = (!(a % i));
    let bDiv = (!(b % i));
    //console.log(i, aDiv, bDiv);
    if (aDiv && bDiv) dem *= i;
    if (aDiv) a /= i;
    if (bDiv) b /= i;
    if (!aDiv && !bDiv) i ++;
  }
  return dem;
}

function tests() {
  console.log(gcd(10,8));
  console.log(gcd(10, 9));

  for (let i = 10; i < 20; i ++) {
    for (let j = 10; j < 20; j ++) {
      console.log(i, j, gcd(i, j));
    }
  }
}

//tests();

module.exports = gcd;
