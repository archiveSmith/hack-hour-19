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
  const freqStore = {};
  array.forEach(function(element){
    if (!freqStore.hasOwnProperty(element)) {
      freqStore[element] = 1;
    } else {
      freqStore[element]++;
    }
  });

  const freqArray = Object.entries(freqStore);
  freqArray.sort((arr1, arr2) => arr2[0]-arr1[0]);
  freqArray.sort((arr1, arr2) => arr2[1] - arr1[1]);
  mode = freqArray[0][0];

  const sum = array.reduce((a,b) => a+b);
  const mean = Math.floor(sum/array.length);

  return mode==mean;
}

module.exports = modemean;
