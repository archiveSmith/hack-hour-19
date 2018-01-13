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
  let stairs = '';
  for(var i = n; i >= 1; i--);{
    stairs += ' ';
    let end = n - i;
    for(var i = 1; i >= end; i++ ){
      stairs += '*';
    }
  }
  return stairs;
}


// module.exports = drawStairs;
