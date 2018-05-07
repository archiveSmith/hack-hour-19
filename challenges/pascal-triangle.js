/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  //set var result to empty array;
var result = [];
//iterate from 0 to numRows
for(let i = 0; i<numRows; i++) {
  let row = [];
  //if i is 0, push [0] to result. else iterate from 0 to i;
  for(let j = 0; j<=i; j++) {
    if(i === 0) {
      row.push(1);
    }  else  {
      var previous = result[i-1].slice();
      previous.unshift(0);
      previous.push(0);
      // get some of prev array sliced from j to iterate
    var sum = previous.slice(j, j+2).reduce((a, b ) => a + b);
    row.push(sum);
    }
  }
  result.push(row);
}
return result;
}


module.exports = pascalTriangle;
