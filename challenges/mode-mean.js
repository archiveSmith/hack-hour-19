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
  const length = array.length;
  const mean = 0;
  let mode = 0;
  const track = {};

  if (length === 1) {
    return true;
  } else {
    const sum = array.reduce((acc, v) => acc + v, 0);
    const mean = Math.floor(sum/length);

    for (var i = 0; i < array.length; i++) {
      if (!track[array[i]]) track[array[i]] = 1;
      else track[array[i]] += 1;
      if (track[array[i]] > mode) mode = array[i];
    }
    return mode === mean;
  }
}

module.exports = modemean;
