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
  return findMean(array) === findMode(array);
}

function findMode(array) {
  if (array.length === 1) return array[0];
  let store = {};
  let max = 0;
  array.forEach(num => {
    store[num] = store[num] + 1 || 1;
  });
  console.log(store);
  for (let key in store) {
    if (store[key] > max) {
      max = key;
    }
  }
  return Number(max[0]);
}

function findMean(array) {
  if (array.length === 1) return array[0];
  let sum = array.reduce((total, num) => {
    return total + num;
  });
  return Math.floor(sum / array.length);
}

module.exports = modemean;
