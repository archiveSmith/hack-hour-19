/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 *  - Math.floor the mean
 *  - If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  const mean = Math.floor(getAverage(array));
  const mode = getMode(array);
  return mean === mode;
}

function getAverage (arr) {
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}

function getMode (arr) {
  const freq = {};
  arr.forEach(num => {
    if (freq[num] === undefined) {
      freq[num] = 1;
    } else {
      freq[num]++;
    }
  });
  return parseInt(Object.keys(freq).reduce((max, key) => {
    if (freq[key] >= freq[max] && parseInt(key) > parseInt(max)) {
      return key;
    }
    return max;
  }));
}

module.exports = modemean;
