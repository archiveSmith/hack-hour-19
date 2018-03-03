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
  let count = array.reduce((acc,cur) => {
    if(!acc.hasOwnProperty(cur)){
      acc[parseInt(cur)]=0;
    }
    acc[cur]++
    return acc
  },{})


  count.length = Object.keys(count).length
  console.log(count)
  let arrNum = Array.prototype.slice(count,0)
  console.log(arrNum)
  
  let modeNum = Object.keys(count).reduce((acc,cur) => count[cur][0] > acc ? count[cur][0]:acc)
  
  let total = array.reduce((acc,cur) => acc+cur , 0)
  let mean = Math.floor(total/array.length)
  
  return total === mean
}

//module.exports = modemean;
modemean([5,5,3,2,1,1,1,3,5])
