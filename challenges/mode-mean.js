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
    let meanSum = array.reduce((a, b) => a + b, 0);
    let mean = Math.floor((meanSum / array.length)); 
    let highestModeKey = 0;
    
    let modeObj = array.reduce(function(result, elem) {
      result[elem] = (result[elem] || 0) + 1;
      return result;
    }, {});
    
    for (let key in modeObj) {
      if (modeObj[key] > highestModeKey) {
        highestModeKey = key;
      }
    }

    return mean === Number(highestModeKey);
    
}

module.exports = modemean;
