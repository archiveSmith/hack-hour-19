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
<<<<<<< HEAD
    //calculate mean;
    let totalMean = 0;
    for (let i = 0; i < array.length; i++) {
        totalMean += array[i];
    }
    totalMean = totalMean / array.length
    console.log(totalMean)
    //calculate mode;
    let modeArr = {};
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (modeArr[array[i]] === undefined) {
            modeArr[array[i]] = 0;
        }

        modeArr[array[i]] += 1
    }
    Object.values(modeArr);
=======

>>>>>>> ac9bfba09787a02c8aeac2eac1f4a471666eba05
}

module.exports = modemean;
