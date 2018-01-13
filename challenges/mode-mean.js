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

module.exports = modemean;

function modemean(array) {

    let sum = 0;
    let range = 0;
    let median = 0;
    let mean = 0;
    let evenOrOddLength;
    let min, max;


    array.forEach(function(el, i){
        if (i === 0){
            min = el;
            max = el;
        }
        max = Math.max(max, el);
        min = Math.min(min, el);
        sum += el;
    });
    evenOrOddLength = array.length % 2;
    // if (evenOrOddLength === 0){
    //     // find the two middle numbers and average
    //     median = array[evenOrOdd + 1] + array[evenOrOdd - 1];
    // }
    // else {
    //     // goto the middle element and set median equal to it
    //     median =
    // }

    mean = Math.floor(sum/array.length);
    range = max - min;
    console.log('array: ' + array.toString());
    console.log('sum: ' + sum);
    console.log('elements: ' + array.length);
    console.log('mean: ' + mean);
    console.log('max: ' + max);
    console.log('min: ' + min);
    console.log('range: ' + range);
    console.log('evenOrOddLength: ' + evenOrOddLength);

}
modemean([1,3,5,7]);