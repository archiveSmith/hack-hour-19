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
    let mean = Math.floor(array.reduce((acc,ele) => acc + ele)/array.length);
    let mode = checkMode(modeObj(array));
    console.log(mean,mode)
    return mode == mean;
  }
  
  
  function modeObj(array) {
    var obj = {};
    for (var i = 0; i < array.length; i++) {
      if (!obj[array[i]]) {
        obj[array[i]] = 1;
      } else {
        obj[array[i]]++;
      }
    }
    return obj;
  }
  
  function checkMode (obj) {
    var largest = 0;
    for (var i in obj) {
      if (obj[i] >= largest) {
        largest = i;
      } 
    }
    return largest;
  }
module.exports = modemean;
