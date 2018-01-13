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
function mean(array){

  let hold = array.reduce((a, c) => a + c, 0);
  return Math.floor(hold/array.length);
}

function mode(array){
  let storage = array.reduce(function(tally, key){
    tally[key] = (tally[key] || 0) + 1;
    return tally;
  } ,{});
  let largest = 0;
  let ind = [];
  for(var key in storage){
    if(storage[key] > largest){
      largest = storage[key];
      ind.push(key);
    }
  }
  return Math.max(...ind);
}
function modemean(array) {
  let me = mean(array);
  let mo = mode(array);
  if(me === mo){
    return true;
  }
  return false;
}

module.exports = modemean;
