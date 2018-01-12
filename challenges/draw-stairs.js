/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function astString(num, total) {
    var string = [];
    while(total > 0) {
        string.push(' ');
        total--;
    }
    while(num > 0) {
        string[num -1] = "*";
        num--;
    }
    return string.reverse().join('');
}

function drawStairs(n) {
    var count = 1;
    while (count <= n) {
        console.log(astString(count, n));
        count += 1;
    }
}


module.exports = drawStairs;
