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
//mode is the most repeated number
//mean is the average

function modemean(array) {
  let Array = array.sort().reverse();
  let count = {};
  let compare = 0;
  let mode;

  let mean = array.reduce(function (sum, num) {
    return sum + num;
  }) / array.length

  for (var i = 0; i < Array.length; i++) {
    if (count[Array[i]] === undefined) {
      count[Array[i]] = 1;
    } else {
      count[Array[i]]++;
    }

    if (count[Array[i]] > compare) {
      compare = count[Array[i]];
      mode = Array[i];
    }
  }


  if (Math.floor(mean) === mode) {
    return true;
  } else {
    return false;;
  }

  module.exports = modemean;
