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
    let len = array.length;

    function mean(array){//the average number
        let count = 0;
        for (let i = 0; i < len; i++) count += array[i];
        return count / len;
    }

    function mode(array){//how many
        let table = {};
        let answer = {num: null, count: 0};
        for (let i = 0; i < array.length; i++) {
            let num = array[i];
            !table[num] ? table[num] = 1 : table[num] += 1;
        }
        for (const key in table) {
            if(table[key] > answer['count']){
                answer['count'] = table[key];
                answer['num'] = key;
            }
        }
        return answer.num;
    }
    return mode(array) == mean(array) ? true : false;
}
module.exports = modemean;
