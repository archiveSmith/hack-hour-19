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
  let arr = array.slice().sort();
  let current;
  let prev = array[0];
  let count = 1;
  let best = 1;
  let mode = prev;
  let total = prev;

  for (let i = 1; i < arr.length; i ++) {
    let current = arr[i];

    // for finding mean
    total += current;

    // for finding mode
    if (current === prev) {
      count ++;
    } else {
      count = 1;
    }
    if (count >= best) {
      mode = current;
      best = count;
    }
    prev = current;
  }

  let mean = Math.floor(total / arr.length);
  //console.log(mode);
  //console.log(mean);
  return (mean === mode);
}

module.exports = modemean;
