/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  // find prime factorization for each number and store them in arrays:
  let afact = [1];
  let bfact = [1];
  
  for (let i=2; i<=a; i++) {
    while (a%i === 0 && a>0){
      afact.push(i);
      a = a/i;
    }
  }

  for (let i=2; i<=b; i++) {
    while (b%i === 0 && b>0){
      bfact.push(i);
      b = b/i;
    }
  }
  
  // find the intersection of the arrays.
  let commonfacts = [];
  for (let k=0; k<afact.length; k++) {
    if (bfact.includes(afact[k])){
      commonfacts.push(afact[k]);
      bfact.splice(bfact.indexOf(afact[k]), 1);
    }
  }
  
  return commonfacts.reduce((prod, nextEl) => prod*nextEl);
}

module.exports = gcd;