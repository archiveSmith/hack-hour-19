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
    let str = '';
    let spaceCount = n - 1;
    let starCount = 0;
    while(n){
        for(let i = 0; i < spaceCount; i++){
            str += ' ';
        }
        for (let j = 0; j < starCount; j++){
            str += '*'
        }
        spaceCount--;
        str += '*\n'
        starCount++;
        n--
    }
    console.log(str);
}



module.exports = drawStairs;
