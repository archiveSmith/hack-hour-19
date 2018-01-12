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
  var spaces = ' ';
  for (var i = 1; i < n; i++) {
    spaces += ' ';
  }
  var ast = '*';
  while (n !== 0) {
    console.log(spaces + ast)
    ast += '*';
    spaces = spaces.slice(1);
    n -= 1;
  }
}


module.exports = drawStairs;
