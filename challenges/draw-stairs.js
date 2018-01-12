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
  var myPrint = "";
  space = " ";
  var asterik = '*';
  for(var i = n; i> 0; i--) {
    myPrint+=space.repeat(i-1).concat(asterik.repeat(n-(i-1))) + "\n";
  }
  console.log(myPrint);
}
drawStairs(6);


module.exports = drawStairs;
