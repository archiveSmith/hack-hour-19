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
var newmyArr = array.sort().reverse();

function modemean(array) {
  
  var total = 0;
  for(var i = 0; i<newmyArr.length; i++ ) {
  total += newmyArr[i];
  }
  var myMean = total/newmyArr.length;
  var newMean = Math.floor(myMean)
 


var mode = 0;
var count = 0;
  for(var s = 0; s < newmyArr.length; s++){
    for(var j = 0; j < s; j++){
       if(newmyArr[j] === newmyArr[s]){
           mode = newmyArr[j];
           count++;
           console.log(count);
       }
    }
  }
  console.log("my mode " + mode)
  console.log("my newMean " + newMean)
  
  
  if(mode === newMean) {
    return true;
  }  else  {
    return false;
  }

}
modemean(array)

module.exports = modemean;
