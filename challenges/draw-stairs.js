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
let spaces = "";
let ast = "";
let constantN = n;
	// console log each stair case
	for(let i=1; i<=n; i++){
		// for adding spaces
		for(let j=0; j<(constantN-i); j++){
			spaces+="-"; 
		}
		// for adding ast
		for(let k=0; k<i; k++){
			ast+="*";
		}
		console.log(spaces+ast); 
		spaces="";
		ast="";
	}
}


module.exports = drawStairs;
