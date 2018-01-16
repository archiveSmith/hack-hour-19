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
  return mode(array) === mean(array);
}

function mode(array) {

  const tally = {};

  // get the counts
  array.forEach(e => {

    if (e in tally) {
      tally[e] += 1;
    } else {
      tally[e] = 1;
    }
  });

  // get the largest
  let max = -Infinity;
  let maxObject = {
    value: -Infinity,
    count: 1 };

  Object.keys(tally).forEach(k => {
    if (tally[k] >= maxObject.count) {
      maxObject.max = k;
      maxObject.count = tally[k];
    }
  });

  return parseFloat(maxObject.max);
}

function mean(array) {
  const sum = array.reduce((s, n) => (s + n), 0);
  return Math.floor(sum / array.length);
}

module.exports = modemean;
