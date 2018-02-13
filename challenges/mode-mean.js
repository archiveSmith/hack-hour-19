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
  const count = {};
  let sum = 0;
  for (let elem of array) {
    sum += elem;
    if (!count[elem]) {
      count[elem] = 1;
    } else {
      count[elem] += 1;
    }
  }
  const mean = Math.floor(sum / array.length);
  let max = 0;
  for (let key of Object.keys(count)) {
    if (count[key] > max) {
      max = count[key];
    }
  }
  const mode = [];
  for (let key of Object.keys(count)) {
    if (count[key] === max) mode.push(count[key]);
  }

  let maxMode = 0;
  for (let elem of array) {
    if (elem > maxMode) maxMode = elem;
  }
  return maxMode === mean;
}

module.exports = modemean;
