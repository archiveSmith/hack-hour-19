/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  const obj = {}
  const total = arr.reduce(function (a, b) {
    if (!obj[b]) {
      obj[b] = 1;
    } else {
      obj[b] += 1;
    }
    return a + b;
  }, 0)
  const mean = Math.floor(total / arr.length);
  if (!obj[mean]) return false;
  else {
    const result = {};
    for (prop in obj) {
      console.log(obj[prop])
    }
  }
}

module.exports = modemean;
