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
 let mean = findMean(array);
 let mode = findMode(array);

 return mean === mode;
}

//find the Mode
function findMode(array) {
  let mode = array.reduce(function(score, item){
    if(!score[item]) {
      score[item] = 1;
    } else {
      score[item] += 1;
    }
    return score
  },{});
  
  let modeArray = Object.values(mode);
  let result = Math.max(...modeArray);

  return result;
}

// Find the mean
function findMean (array) {
  const results = array.reduce(function(accum, item, idx, arr) {
    const val = accum + item;

    if(idx === arr.length - 1) {
      let mean = val/arr.length;
    }
    return val;
  }, 0);
  
  return results;
}
 

module.exports = modemean;

console.log(modemean([1, 2, 3, 3, 4, 5, 3, 1])); //22
