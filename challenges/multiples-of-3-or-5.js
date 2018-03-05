'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;

  for (let i=0; i<1000; i+=3) {
    sum += i;
  }
  for (let j=0; j<1000; j+=5) {
    sum += i;
  }
  // subtract duplicates
  for (let k=0; k<1000; k+=15) {
    sum -= i;
  }
  
  
  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;

  for (let i=0; i<z; i+=x) {
    sum += i;
  }
  for (let j=0; j<z; j+=y) {
    sum += j;
  }
  // subtract duplicate
  let lcm;
  const smaller = Math.min(x,y);
  for (let l=smaller; l<(x*y); l++){
    if (l%x === 0 && l%y === 0) {
      lcm = l;
      break;
    }
  }
  
  for (let k=0; k<z; k+=lcm) {
    sum -= k;
  }

  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
