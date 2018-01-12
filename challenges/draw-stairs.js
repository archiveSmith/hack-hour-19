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
  const symbol = '*';
  const fill = ' ';

  for (let i = 1; i <= n; i += 1) {
    let display = '';

    // build stairs
    for (let j = 1; j <= i; j += 1) {
      display += symbol;
    }

    // add spaces to front
    const { length } = display;
    const numSpaces = n - length;
    let front = '';

    for (let k = 0; k < numSpaces; k += 1) {
      front += fill;
    }

    // combine space and symbol
    console.log(front + display);
    display = '';
  }

}

module.exports = drawStairs;
