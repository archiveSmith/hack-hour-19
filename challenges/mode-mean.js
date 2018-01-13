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
  const sum = array.reduce((acc, v) => {
    acc += v;
    return acc;
  }, 0);
  const mean = Math.floor(sum/(array.length));

  const sorted = array.sort((a, b) => a - b);
  const middle = Math.ceil(array.length/2);
  const mode = array[middle];

  return sorted === mode;
}

module.exports = modemean;
