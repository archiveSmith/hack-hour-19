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
  if (n < 1 || n > 100) {
    return undefined;
  }
  let stairs = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n - i; j++) {
      stairs += ' ';
    }
    for (let k = 0; k < i; k++) {
      stairs += '*';
    }
    if (i < n) {
      stairs += '\n';
    }
  }
  console.log(stairs);
  return stairs;
}

module.exports = drawStairs;
