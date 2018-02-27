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

//optimized for time

function makeSpaceArray(character, x) {
  var str = [];
  for (var i = 0; i < x; i++) {
    str.push(character);
  }
  return str;
}

function drawStairs(n) {
  var arr = makeSpaceArray(" ", n);
  while (n > 0) {
    arr[--n] = "*";
    console.log(arr.join(""));
  }
}

//optimized for space
function drawStairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      process.stdout.write(j + i + 1 >= n ? "*" : " ");
    }
    process.stdout.write("\n");
  }
}

//optimized for both
function drawStairs(n) {
  for (var i = 1; i <= n; i++) {
    var spaces = " ".repeat(n - i);
    var splats = "*".repeat(i);
    console.log(spaces + splats);
  }
}

module.exports = drawStairs;
