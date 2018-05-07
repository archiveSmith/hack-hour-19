function modemean(array) {
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

let testArr = [1, 2, 3, 2];

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
  // if number is already in object ( already appeared in the given array) increment value, otherwise set it equal to one.
  array.forEach(function(num) {
    if (num in count) {
      return count[num]++;
    }
    count[num] = 1;
  });
  // set max to -infinity so all numbers regardless of value will be included.
  var max = -Infinity;
  var modeCandidates;
  for (var num in count) {
    if (count[num] > max) {
      // numbers with most occurences in array become get updated to mode candidate variable.
      modeCandidates = [num];
      max = count[num];
      
    } else if (count[num] === max) {
      modeCandidates.push(num);
    }
  }
  // then we return largest of mode candidates
  return Math.max.apply(this, modeCandidates);
}
modemean(testArr);
}

module.exports = modemean;
