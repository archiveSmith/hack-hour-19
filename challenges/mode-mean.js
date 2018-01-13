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
    let mode = getMode(array);
    let mean = Math.floor(array.reduce(function (a, b){
        return a += b;
    },0) / array.length);

    return mode == mean;
}

function getMode(array){
    let notUnique = [];
    let checked = [];
    for (let i = 0; i < array.length; i++) {
        if (!checked.includes(array[i])) {
            notUnique.push(count(array, array[i]));
        }
        checked.push(array[i]);
    }
    return notUnique.sort(function (a, b){
        return a[1] < b[1];
    }).sort(function (a, b){
        return a[0] < b[0];
    })[0][1];
}

function count(array, el){
    let count = 0;
    for (var i = 0; i < array.length; i++) {
        if(el === array[i]) {
            count++;
        }
    }
    return [count, el];
}

console.log(modemean([10, 5, 5, 5, 5, 5, 5]));

//module.exports = modemean;
