'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  sum = sumMultiplesXOrYBelowZ(3, 5, 1000);
  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') return;
  let sum = 0;
  let seriesCount = Math.floor((z-1) / x);
  sum += (x * seriesSum(seriesCount));
  //console.log(sum);
  seriesCount = Math.floor((z-1) / y);
  sum += (y * seriesSum(seriesCount));
  //console.log(sum);

  seriesCount = Math.floor((z-1) / (x * y));
  sum -= ((x * y) * seriesSum(seriesCount));
  return sum;
}

function linearMults(x, y, z) {
  let sum = 0;
  for (let i = 1; i < z; i ++) {
    if (i % x === 0) {sum += i};
    if (i % y === 0) {sum += i};
    if (i % (x * y) === 0) {sum -= i};
  }
  return sum;
}

function seriesSum(num) {
  let sum = 0;
  let x = num + 1;
  let times = Math.floor(num / 2);
  if (num % 2) {sum += (Math.floor(x / 2))};
  sum += (x * times);
  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

function tests() {
  console.log(sumMultiplesXOrYBelowZ(3, 5, 10));
  console.log(sumMultiplesXOrYBelowZ(3, 5, 1000));
  console.log(sumMultiples3Or5Below1000(3, 5, 1000));
  console.log('-------------------------------------')
  console.log(linearMults(3, 5, 10));
  console.log(linearMults(3, 5, 1000));
  console.log(sumMultiplesXOrYBelowZ(3, 'wrong', 1000));

}

// tests();

module.exports = objectToExport;
