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
    let mean = 0;
    let sum = 0;
    let mode = {};
    array.forEach(element => {
      sum += element;
      mode[element] = (mode[element] || 0) += 1;
    });
    mean = Math.floor(sum / array.length);
    Object.va
}

module.exports = modemean;
