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

function drawStairs(n) {
<<<<<<< HEAD
    let next;
    let extra;
    let stairs;
    for (var i = 0; i < n; i++) {
        next = n - 1 - i;
        extra = i + 1;
        stairs = ' '.repeat(next) + '*'.repeat(extra);
        console.log(stairs);
    }
=======

>>>>>>> ac9bfba09787a02c8aeac2eac1f4a471666eba05
}


module.exports = drawStairs;
