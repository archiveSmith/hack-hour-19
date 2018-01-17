/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (power === 0) {
    return 1;
  }
  if (power < 0) {
    return (pow(base, power+1) / base);
  } else {
    return base * pow(base, power-1);
  }
}

function tests() {
  for (let i = 0; i < 10; i ++) {
    for (let j = 0; j < 5; j ++) {
      console.log(pow(i,j));
    }
  }
  for (let i = 0; i < 10; i ++) {
    for (let j = 0; j < 5; j ++) {
      console.log(pow(i,(-1 * j)));
    }
  }
}

//tests();

module.exports = pow;
