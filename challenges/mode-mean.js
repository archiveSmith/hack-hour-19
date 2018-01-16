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


function modemean(array) { /function modemean(array) { // [1,2,3,4]
    let sum = array.reduce(function(a,b){return a+b;});
    let avg = Math.floor(sum/array.length);

    let obj = {}; // {num: frequency}
    
    for (let i=0; i<array.length; i++) {
        if (!obj[array[i]]) {
            obj[array[i]] = 1;
            continue;
        }
        if (obj[array[i]]) {
            obj[array[i]]++;
        }
    }

    let vals = Object.values(obj); // frequency of the numbers in array form
    let highestCount = Math.max.apply(Math,vals); // obtain the greatest frequency
  
    let modeVal = [];
    for (let prop in obj) { // determine the mode value
        if (obj[prop] = highestCount) {
            modeVal.push(parseInt(prop));
        }
    }
    
    let maxMode = Math.max.apply(Math,modeVal); // determine max mode in case there are several modes

    if (maxMode === avg) return true;
    return false;

    }




module.exports = modemean;
