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

    function mean(array){//the average number
        let count = array.reduce((acc, cur) => acc += cur, 0)
        return Math.floor(count/array.length);
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
// console.log(modemean([4,4,4,6,2]))
module.exports = modemean;
