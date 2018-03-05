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




  function modemean(array) {
    return mean(array) === mode(array);
  }
  
  function mean(array) {
    var sum = array.reduce(function(sum, el) {
      return sum + el;
    });
    return Math.floor(sum / array.length);
  }
  
  function mode(array) {
    var count = {};
    array.forEach(function(num) {
      if (num in count) {
        return count[num]++;
      }
      count[num] = 1;
    });
    var max = -Infinity;
    var modeCandidates;
    for (var num in count) {
      if (count[num] > max) {
        modeCandidates = [num];
        max = count[num];
      } else if (count[num] === max) {
        modeCandidates.push(num);
      }
    }
    return Math.max.apply(this, modeCandidates);
  }
  
module.exports = modemean;
